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
function getTeacher (Id,done) {
        $.ajax({
            type:'POST',
            url:'https://learning-man-sys.herokuapp.com/api/teachers/',
            contentType:"application/json",
            data:{},
            crossDomain:true,
            success:function(data){
                console.log("Success :"+data);
                console.log(data.name);
            }
            ,
            error: function(data){
                console.log("error :"+data);
                console.log(data.name);
            }
        });
      
}
$(function () {
    let teacherName = $('#teacherName')
    
    $('#btnTeacherAdd').click(async function () {
        if(teacherName.val().length==0){
            await window.alert("Teacher name cannot be empty")
            return;
         }
        await addTeacher(
            teacherName.val(),
            function (addedTeacher) {
                window.alert("Added " + addedTeacher.name + "Teacher to Database")
            }
        )


    })

})

$(function () {
    let teacherId = $('#teacherId')
    
    $('#btnSeeByIdTeacher').click(async function () {
        if(teacherId.val().length==0){
            await window.alert("Teacher Id cannot be empty")
            return;
         }
        await getTeacher(
            teacherId.val(),
            function (Teacher) {
                console.log(Teacher);
                window.alert("Added " + Teacher.name + "Teacher to Database")
            }
        )


    })

})
