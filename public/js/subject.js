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
    
    $('#btnSubjectAdd').click(async function () {
        if(subjectname.val().length==0 ){
            await window.alert("Subject name  cannot be empty")
            return;
         }
         if(courseId.val().length==0 ){
            await window.alert("Course Id should be number")
            return;
         }
        await addSubject(
            subjectName.val(),
            courseId.val(),
            function (addedSubject) {
                window.alert("Added " + addedSubject.name + "Subject to Database")
            }
        )


    })

})

function getSubject (Id,done) {
   
    
    $.ajax({
        type:'GET',
        url:'https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/subjects/'+Id,
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
    let subjectId = $('#subjectId')

    $('#btnSeeByIdSubject').click(async function () {
        if(subjectId.val().length==0){
            await window.alert("Subject Id cannot be empty")
            return;
         }
        await getSubject(
            subjectId.val(),
            function (Subject) {
                setUpModal(Subject.data,"Subject Details");
                $('#myModal').show();
            }
        )


    })

})

$(function() {
    $("#btnSeeSubject").click(async function() {
      await getAllSubjects(function(Subject) {
        setUpAllModal(Subject.data, "Subject Details");
        $("#myModal2").show();
      });
    });
  });

  function getAllSubjects(done) {
    $.ajax({
      type: "GET",
      url:
        "https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/subjects/",
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