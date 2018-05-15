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
                window.alert("Added " + addedTeacher.name + " Teacher to Database")
            }
        )


    })

})
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(function () {
    let teacherId = $('#teacherId')
    var modal = document.getElementById('myModal');

    $('#btnSeeByIdTeacher').click(async function () {
        if(teacherId.val().length==0){
            await window.alert("Teacher Id cannot be empty")
            return;
         }
        await getTeacher(
            teacherId.val(),
            function (Teacher) {
                modal.style.display = "block";
            }
        )


    })

})
