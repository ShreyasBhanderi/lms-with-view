function addTeacher (name,done   ) {

      $.ajax({
        type:'POST',
        url:'https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/teachers/',
        contentType:"application/json",
        dataType: "jsonp",
        data: {name:name},
        success:function(data){
            done({name:name});
        }
        ,
        error: function(data){
            console.log("error");
        },
        jsonp: 'jsonp' 
    })
      
}
function getTeacher (Id,done) {
   
    
        $.ajax({
            type:'GET',
            url:'https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/teachers/'+Id,
            contentType:"application/json",
            dataType: "jsonp",
            success:function(data){
                done(data);
            }
            ,
            error: function(data){
                console.log("error");
            },
            jsonp: 'jsonp' 
        })
      
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
                console.log(Teacher.data.name   );
                window.alert("Added " + Teacher.data.name + "Teacher to Database")
            }
        )


    })

})
