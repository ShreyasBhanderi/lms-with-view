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
    
    $('#btnStudentAdd').click(async function () {
        if(studentName.val().length==0){
            await window.alert("Student name cannot be empty")
            return;
         }
        await addStudent(
            studentName.val(),
            function (addedStudent) {
                window.alert("Added " + addedStudent.name + " Student to Database")
            }
        )


    })

})

function getStudent (Id,done) {
   
    
    $.ajax({
        type:'GET',
        url:'https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/students/'+Id,
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
    let studentId = $('#studentId')

    $('#btnSeeByIdStudent').click(async function () {
        if(studentId.val().length==0){
            await window.alert("Student Id cannot be empty")
            return;
         }
        await getStudent(
            studentId.val(),
            function (Student) {

                setUpModal(Student.data,"Student Details","student");
                $("#input").attr("placeholder", "Enroll in batch");
      $('#input').show();
      $('#buttonNew').show();
      $('#buttonNew').text("Enroll");
      $('#buttonNew').click(function(){addStudentBatch(Student.data.id,$('#input').val(),(obj)=>alert("student "+Student.data.name+" added to batch "+obj.name))});
                $('#myModal').show();
            }
        )


    })

})
function addStudentBatch(Id,batch,done){
    if(batch.length==0){
        alert("batch name can not be empty")
        return
    }
    $.post('https://learning-man-sys.herokuapp.com/api/students/'+Id+'/batches', {
        name: batch
    }, function (data) {
        done({name:batch})}
    ).done(function() {
        
        done({name:batch})
      })
      .fail(function() {
        
        done({name:batch})
      })
}
$(function() {
    $("#btnSeeStudent").click(async function() {
      await getAllStudents(function(Student) {
        setUpAllModal(Student.data, "Student Details","student");
        $("#myModal2").show();
      });
    });
  });

  function getAllStudents(done) {
    $.ajax({
      type: "GET",
      url:
        "https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/students/",
      contentType: "application/json",
      dataType: "jsonp",
      success: function(data) {
        done(data);
      },
      error: function(data) {
        console.log("error");
      },
      jsonp: "jsonp"
    });
  }