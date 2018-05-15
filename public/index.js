function addCourse (name) {
    $.post('https://learning-man-sys.herokuapp.com/api/courses', {
        name: name
    }, function (data) {
        console.log(data);
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