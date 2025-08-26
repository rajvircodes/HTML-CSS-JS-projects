let student = [];

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



}