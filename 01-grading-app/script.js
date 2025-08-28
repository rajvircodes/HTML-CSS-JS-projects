let students = [];

function calculateGrade() {
    const name = document.getElementById('studentName').value.trim();
    const subject = document.getElementById('subject').value;
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);
    const obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);

    if (!name || !subject || !totalMarks || !obtainedMarks){
        alert('please fill in all fields!')
        return;
    }

    if(obtainedMarks > totalMarks){
        alert('Obtained marks cannot be greater than total marks!');
        return;
    }

    const percentage = (obtainedMarks / totalMarks) * 100;
    const gradeData = getGradeData(percentage);


    // Display result

    document.getElementById('gradeLetter').textContent = gradeData.letter;
    document.getElementById('gradePercentage').textContent = percentage.toFixed(1) + '%';
    document.getElementById('gradeStatus').textContent = gradeData.status;
    document.getElementById('gradeResult').classList.add('show');

    //Add to student array 

    const student = {
        name : name,
        subject: subject, 
        totalMarks: totalMarks,
        obtainedMarks: obtainedMarks,
        percentage: percentage,
        grade: gradeData.letter,
        status: gradeData.status,       
    };

    students.push(student);
    updateStudentTable();
    updateStats();
    clearForm()

}

function getGradeData(percentage) {
    if(percentage>= 90)
        return {
    letter: 'A', status: 'Excellent Performance!!'};

    if(percentage>=80)
        return {
            letter: 'B', status: 'Good Performance !!'};
    if(percentage >= 70)
        return {letter: 'C', status: 'Satisfactory Perfomance!'};

    if(percentage >= 60)
        return {
            letter: 'D', status: 'Need Improvements'
        };

        return { letter: 'F',status: 'Failed Requires Attention'};
}

    function updateStudentTable(){
        const tbody = document.getElementById('studentTableBody');
        tbody.innerHTML = '';

        students.forEach(student => {
            const row = tbody.insertRow();
            row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.subject}</td>
            <td>${student.obtainedMarks} / ${student.totalMarks}</td>
            <td> ${student.percentage.toFixed(1)}% </td>
            <td class ="grade-${student.grade}">${student.grade}</td>
            <td>${student.status}</td>`;
        });

    }

//     function updateStats() {
//     document.getElementById('totalStudent').textContent = students.length;

//     if (students.length > 0) {
//         const averagePercentage = students.reduce((sum, student) => sum + student.percentage, 0) / students.length;

//         document.getElementById('averagePercentage').textContent = averagePercentage.toFixed(1) + '%';
//     } else {
//         document.getElementById('averagePercentage').textContent = '0%';
//     }
// }


  function updateStats() {
            document.getElementById('totalStudent').textContent = students.length;
            
            if (students.length > 0) {
                const averagePercentage = students.reduce((sum, student) => sum + student.percentage, 0) / students.length;
                document.getElementById('averageGrade').textContent = averagePercentage.toFixed(1) + '%';
            } else {
                document.getElementById('averageGrade').textContent = '0%';
            }
        }

function clearForm(){
    document.getElementById('studentName').value = '';
    document.getElementById('subject').selectedIndex = 0;
    document.getElementById('totalMarks').value = '';
    document.getElementById('obtainedMarks').value = '';

}

function addBulkGrade() {
    const bulkGrade = document.getElementById('bulkGrade').value;
        if(!bulkGrade) return;

        const [grade, range] = bulkGrade.split(',');
        const studentName = prompt(`Enter student name for${grade} grade`);
        const subject = prompt(`Enter Subject`);

        if(studentName && subject) {
            const minPercentage = grade === 'F' ? 0 : parseInt(range.split('-')[0]);

            const maxPercentage = parseInt(range.split('-')[1]);

            const randomPercentage = Math.random() * (maxPercentage - minPercentage) + minPercentage;
            const totalMarks = 100;
            const obtainedMarks = (randomPercentage / 100) * totalMarks;

            const student = {
                name:studentName,
                subject:subject,
                totalMarks:totalMarks,
                obtainedMarks:obtainedMarks,
                percentage:randomPercentage,
                grade:grade,
                status:getGradeData(randomPercentage).status

            };

            students.push(student);
            updateStudentTable();
            updateStats();
        }
        document.getElementById('bulkGrade').selectedIndex = 0;
}

function generateReport() {
    if(students.length === 0){
        alert('No student data available to generate report!');
        return;
    }

    const grades = {A: 0, B: 0, C: 0, D: 0, E:0, F: 0 };

    students.forEach(student => grades[student.grade]++);

    const report  = `
    GRADE SUMMARY 
    =================
    Total Student: ${students.length}
    Average Grade: ${(students.reduce((sum, s) => sum + s.percentage, 0) / students.length).toFixed(1)}%
    
    Grade Distribution: 
• A Grade: ${grades.A} students (${((grades.A/students.length)*100).toFixed(1)}%)
• B Grade: ${grades.B} students (${((grades.B/students.length)*100).toFixed(1)}%)
• C Grade: ${grades.C} students (${((grades.C/students.length)*100).toFixed(1)}%)
• D Grade: ${grades.D} students (${((grades.D/students.length)*100).toFixed(1)}%)
• F Grade: ${grades.F} students (${((grades.F/students.length)*100).toFixed(1)}%)

Pass Rate: ${(((students.length - grades.F)/students.length)*100).toFixed(1)}%
            `;
            alert(report);
}

function clearAllData() {
    if(confirm('Are you sure you want to clear all student data ?')){
        // students = [];
        students.length = 0; 

        updateStudentTable();
        updateStats();
        document.getElementById('gradeResult').classList.remove('show');
    }


}

// Initialize stats on page load 
updateStats();
