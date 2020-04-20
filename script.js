function calculateGrade() {

  var participationGrade = parseFloat(document.getElementById("participationGrade").value)
  var quizGrade = parseFloat(document.getElementById("quizGrade").value)
  var homeworkGrade = parseFloat(document.getElementById("homeworkGrade").value)
  var project1Grade = parseFloat(document.getElementById("project1Grade").value) 
  var project2Grade = parseFloat(document.getElementById("project2Grade").value)


  var participationPercent = parseInt(document.getElementById("participationPercent").innerHTML)
  var quizPercent = parseInt(document.getElementById("quizPercent").innerHTML)
  var homeworkPercent = parseInt(document.getElementById("homeworkPercent").innerHTML)
  var project1Percent = parseInt(document.getElementById("project1Percent").innerHTML)
  var project2Percent = parseInt(document.getElementById("project2Percent").innerHTML)


  var participation = participationGrade * participationPercent / 100
  var quiz = quizGrade * quizPercent / 100
  var homework = homeworkGrade * homeworkPercent / 100
  var project1 = project1Grade * project1Percent / 100
  var project2 = project2Grade * project2Percent / 100

  var Final_Grade = participation + quiz + homework + project1 + project2

  console.log(Final_Grade) 
  var display=document.getElementById("calculateGrade");
    display.innerHTML=Final_Grade;
  
}
