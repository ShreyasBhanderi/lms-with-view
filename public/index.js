function addCourse (name,done) {
    $.ajax({
        type:'POST',
        url:'https://learning-man-sys.herokuapp.com/api/courses',
        contentType:"application/json",
        dataType:'jsonp',
        crossDomain:true,
        data:{name:name},
        success:function (data) {
            done(data)
        },
        error: function (name) {
            done(name)
        }
    });
    
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