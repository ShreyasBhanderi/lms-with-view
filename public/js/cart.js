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
    
    $('#btnCourseAdd').click(async function () {
        if(courseName.val().length==0){
           await window.alert("Course name cannot be empty")
           return;
        }
        await addCourse(
            courseName.val(),
            function (addedCourse) {
                window.alert("Added " + addedCourse.name + "Course to Database")
            }
        )


    })

})

