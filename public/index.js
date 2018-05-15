function addCourse (name,done   ) {
    $.post('https://learning-man-sys.herokuapp.com/api/courses', {
        name: name
    }, function (data) {
        done({name:name})}
    ).done(function() {
        
        done({name:name})
      })
      .fail(function() {
        
        done({name:name})
      })
      
}
$(function () {
    let courseName = $('#courseName')
    
    $('#btnCourseAdd').click(function () {

        addCourse(
            courseName.val(),
            function (addedCourse) {
                window.alert("Added " + addedCourse.name + " to Database")
            }
        )


    })

})
function addSubject (name,courseId,done   ) {
    $.post('https://learning-man-sys.herokuapp.com/api/subjects', {
        name: name,courseId:courseId
    }, function (data) {
        done({name:name})}
    ).done(function() {
        
        done({name:name})
      })
      .fail(function() {
        
        done({name:name})
      })
      
}
$(function () {
    let subjectName = $('#subjectName') ;
    let courseId =  $('#courseId')
    
    $('#btnSubjectAdd').click(function () {

        addSubject(
            subjectName.val(),
            courseId.val(),
            function (addedSubject) {
                window.alert("Added " + addedSubject.name + " to Database")
            }
        )


    })

})
function addStudent (name,done   ) {
    $.post('https://learning-man-sys.herokuapp.com/api/students', {
        name: name
    }, function (data) {
        done({name:name})}
    ).done(function() {
        
        done({name:name})
      })
      .fail(function() {
        
        done({name:name})
      })
      
}
$(function () {
    let studentName = $('#studentName')
    
    $('#btnStudentAdd').click(function () {

        addStudent(
            studentName.val(),
            function (addedStudent) {
                window.alert("Added " + addedStudent.name + " to Database")
            }
        )


    })

})
function addTeacher (name,done   ) {
    $.post('https://learning-man-sys.herokuapp.com/api/teachers', {
        name: name
    }, function (data) {
        done({name:name})}
    ).done(function() {
        
        done({name:name})
      })
      .fail(function() {
        
        done({name:name})
      })
      
}
$(function () {
    let teacherName = $('#teacherName')
    
    $('#btnTeacherAdd').click(function () {

        addTeacher(
            teacherName.val(),
            function (addedTeacher) {
                window.alert("Added " + addedTeacher.name + " to Database")
            }
        )


    })

})