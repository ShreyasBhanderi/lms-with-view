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

function getCourse (Id,done) {
   
    
    $.ajax({
        type:'GET',
        url:'https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/courses/'+Id,
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

function getAllBatch (Id,done) {
   
    
    $.ajax({
        type:'GET',
        url:'https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/courses/'+Id+'/batches',
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

function getAllLecture (course,batch,done) {
   
    
    $.ajax({
        type:'GET',
        url:'https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/courses/'+course+'/batches/'+batch+'/lectures',
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
function getAllStudent (course,batch,done) {
   
    
    $.ajax({
        type:'GET',
        url:'https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/courses/'+course+'/batches/'+batch+'/students',
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
    let courseId = $('#courseId2')

    $('#btnSeeByIdCourse').click(async function () {
        if(courseId.val().length==0){
            await window.alert("Course Id cannot be empty")
            return;
         }
        await getCourse(
            courseId.val(),
            function (Course) {
                setUpModal(Course.data,"Course Details");
                $('#myModal').show();
                $("#input").attr("placeholder", "Add batch");
                $('#input').show();
                $('#buttonNew').show();
                $('#buttonNew').text("Add Batch");
                $('#buttonNew').click(function(){addCourseBatch(Course.data.id,$('#input').val(),(obj)=>alert("batch "+obj.name+" added to course "+data.name))});
                $('#buttonNew2').show();
                $('#buttonNew2').text("View Batches");
                $('#buttonNew2').click(async function(){await viewBatch(Course.data.id)});
                        $('#myModal').show();
            }
        )


    })
});
async function viewBatch(course){
    await getAllBatch(course,function(Batch) {
        setUpAllModal(Batch, "Batch Details","batch",course);
        $('#myModal').hide();   
        $('#input').hide();
        $('#buttonNew').hide();
        $("#buttonNew").off("click");
        $("#buttonNew2").off("click");
        $('#buttonNew2').hide();
        
        $("#myModal2").show();
      });
}
async function viewLecture(course,batch){
    await getAllLecture(course,batch,function(Lecture) {
        console.log("In viewLecture");
        setUpAllModal(Lecture, "Lecture Details","lecture",course,batch);
        $('#myModal').hide();   
        $("#buttonNew").off("click");
        $("#button3").off("click");
        $("#buttonNew2").off("click");
        $('#buttonNew2').hide();
        $("#input2").attr("placeholder", "Lecture's name");
        $('#input2').show();
        $("#input3").attr("placeholder", "Lecture's subjectId");
        $('#input3').show();
        $("#input4").attr("placeholder", "Lecture's teacherId");
        $('#input4').show();
        $('#button3').show();
        $('#button3').text("Add Lecture");
        $('#button3').click(function(){addBatchLecture(course,batch,$('#input2').val(),()=>{viewLecture(course,batch)})});
        
        $("#myModal2").show();
      });
}
async function viewStudent(course,batch){
    await getAllStudent(course,batch,function(Student) {
        setUpAllModal(Student, "Student Details","batchStudent",course,batch);
        $('#myModal').hide();
        $("#input3").hide()
        $("#input4").hide()   
        $("#buttonNew").off("click");
        $("#buttonNew2").off("click");
        $('#buttonNew2').hide();
        $("#input2").attr("placeholder", "Add Student");
        $('#input2').show();
        $('#button3').show();
        $("#button3").off("click");
        $('#button3').text("Add Student");
        $('#button3').click(function(){addBatchStudent(course,batch,$('#input2').val(),()=>{viewStudent(course,batch)})});
        
        $("#myModal2").show();
      });
}
function addCourseBatch(Id,batch,done){
    if(batch.length==0){
        alert("batch name can not be empty")
        return
    }
    $.post('https://learning-man-sys.herokuapp.com/api/courses/'+Id+'/batches', {
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
function addBatchLecture(course,batch,lecture,done){
    if(lecture.length==0){
        alert("lecture name can not be empty")
        return
    }
    if( $('#input3').val().length==0){
        alert("subjectId can not be empty")
        return
    }
    if( $('#input4').val().length==0){
        alert("courseId can not be empty")
        return
    }
    $.post('https://learning-man-sys.herokuapp.com/api/courses/'+course+'/batches/'+batch+'/lectures', {
        name: lecture,
        subjectId: $('#input3').val(),
        teacherId: $('#input4').val()
    }, function (data) {
        done({name:batch})}
    ).done(function() {
        
        done({name:batch})
      })
      .fail(function() {
        
        done({name:batch})
      })
}
function addBatchStudent(course,batch,student,done){
    if(student.length==0){
        alert("student name can not be empty")
        return
    }
    $.post('https://learning-man-sys.herokuapp.com/api/courses/'+course+'/batches/'+batch+'/students', {
        name: student
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
    $("#btnSeeCourse").click(async function() {
      await getAllCourses(function(Course) {
        setUpAllModal(Course.data, "Course Details","course");
        $("#myModal2").show();
      });
    });
  });

  function getAllCourses(done) {
    $.ajax({
      type: "GET",
      url:
        "https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/courses/",
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