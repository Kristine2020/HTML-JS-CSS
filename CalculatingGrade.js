function calculateGrade() {
  var participationGrade = parseInt(document.getElementById("participationGrade").innerHTML)
  var quizGrade = parseInt(document.getElementById("quizGrade").innerHTML)
  var homeworkGrade = parseInt(document.getElementById("homeworkGrade").innerHTML)
  var project1Grade = parseInt(document.getElementById("project1Grade").innerHTML)
  var project2Grade = parseInt(document.getElementById("project2Grade").innerHTML)


  var participation_percent = parseFloat(document.getElementById("participation_percent").innerHTML)
  var quiz_percent = parseFloat(document.getElementById("quiz_percent").innerHTML)
  var homework_percent = parseFloat(document.getElementById("homework_percent").innerHTML)
  var project1_percent = parseFloat(document.getElementById("project1_percent").innerHTML)
  var project2_percent = parseFloat(document.getElementById("project2_percent").innerHTML)


  var participation = participation_percent * participationGrade / 100
  var quiz = quiz_percent * quizGrade / 100
  var homework = homework_percent * homeworkGrade / 100
  var project1 = project1_percent * project1Grade / 100
  var project2 = project2_percent * project2Grade / 100

  var finalGrade = participation + quiz + homework + project1 +project2
  console.log(finalGrade)
}
