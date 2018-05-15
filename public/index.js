function addCourse (name,done) {
    $.post('https://learning-man-sys.herokuapp.com/api/courses', {
        name: name
    }, function (data) {
        done(data)
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