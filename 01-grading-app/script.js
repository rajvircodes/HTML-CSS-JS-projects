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
            letter: 'D', staus: 'Need Improvements'
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

    function updateStats() {
    document.getElementById('totalStudents').textContent = students.length;

    if (students.length > 0) {
        const averagePercentage = students.reduce((sum, student) => sum + student.percentage, 0) / students.length;

        document.getElementById('averagePercentage').textContent = averagePercentage.toFixed(1) + '%';
    } else {
        document.getElementById('averagePercentage').textContent = '0%';
    }
}


//   function updateStats() {
//             document.getElementById('totalStudents').textContent = students.length;
            
//             if (students.length > 0) {
//                 const averagePercentage = students.reduce((sum, student) => sum + student.percentage, 0) / students.length;
//                 document.getElementById('averageGrade').textContent = averagePercentage.toFixed(1) + '%';
//             } else {
//                 document.getElementById('averageGrade').textContent = '0%';
//             }
//         }



