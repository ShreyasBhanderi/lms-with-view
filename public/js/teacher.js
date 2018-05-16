function addTeacher(name, done) {
  $.post(
    "https://learning-man-sys.herokuapp.com/api/teachers",
    {
      name: name
    },
    function(data) {
      done({ name: name });
    }
  )
    .done(function() {
      done({ name: name });
    })
    .fail(function() {
      done({ name: name });
    });
}
function getTeacher(Id, done) {
  $.ajax({
    type: "GET",
    url:
      "https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/teachers/" +
      Id,
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

function getAllTeacher(done) {
  $.ajax({
    type: "GET",
    url:
      "https://jsonp.afeld.me/?callback=?&url=https://learning-man-sys.herokuapp.com/api/teachers/",
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

$(function() {
  let teacherName = $("#teacherName");

  $("#btnTeacherAdd").click(async function() {
    if (teacherName.val().length == 0) {
      await window.alert("Teacher name cannot be empty");
      return;
    }
    await addTeacher(teacherName.val(), function(addedTeacher) {
      window.alert("Added " + addedTeacher.name + " Teacher to Database");
    });
  });
});

$(function() {
  let teacherId = $("#teacherId");

  $("#btnSeeByIdTeacher").click(async function() {
    if (teacherId.val().length == 0) {
      await window.alert("Teacher Id should be number");
      return;
    }
    await getTeacher(teacherId.val(), function(Teacher) {
      setUpModal(Teacher.data, "Teacher Details");
      $("#myModal").show();
    });
  });
});

$(function() {
  $("#btnSeeTeacher").click(async function() {
    await getAllTeacher(function(Teacher) {
      setUpAllModal(Teacher.data, "Teacher Details");
      $("#myModal2").show();
    });
  });
});

function setUpModal(data, title,type) {
  if (data == null) window.alert(title + " with given Id doesn't exist");
  $("#title").text(title);
  $("#id").text(data.id);
  $("#name").text(data.name);
  $("#createdAt").text(data.createdAt);
  $("#updatedAt").text(data.updatedAt);
  
  
}
async function setUpAllModal(data, title,type,course,batch) {
    $("#myModal2").hide();
  $("#title2").text(title);
  let div = $("#data");
  div.text("");
  div.append(`<tr><th>Id</th><th>Name</th><th>Detail</th></tr>`);
  for (let i = 0; i < data.length; i++) {
    await div.append(
      `<tr style = "margin: 20px 10px 0px 0px"><td>` +
        data[i].id +
        `</td>
        <td >` +
        data[i].name +
        `</td>
        <td id='data`+data[i].id+`'>View Details</td></tr>`
    );
    $("#data"+data[i].id).click(function(){
        showModal(data[i],title,type,course,batch);
    })
  }
}
function showModal(data,title,type,course,batch){
    $("#title").text(title);
    
  $("#id").text(data.id);
  $("#name").text(data.name);
  $("#createdAt").text(data.createdAt);
  $("#updatedAt").text(data.updatedAt);
    $("#myModal").show();
    if(type=="student"){
        
        $("#input").attr("placeholder", "Enroll in batch");
        $('#input').show();
        $('#buttonNew').show();
        $("#buttonNew").off("click");
        $("#buttonNew2").off("click");
        $('#buttonNew').text("Enroll");
        $('#buttonNew').click(function(){addStudentBatch(data.id,$('#input').val(),(obj)=>alert("student "+data.name+" added to batch "+obj.name))});
                 
    }
    if(type=="course"){
        
        $('#myModal').show();
        $("#input").attr("placeholder", "Add batch");
        $('#input').show();
        $('#buttonNew').show();
        $('#buttonNew').text("Add Batch");
        
        $("#buttonNew").off("click");
        $('#buttonNew').click(function(){console.log("test");addCourseBatch(data.id,$('#input').val(),(obj)=>alert("batch "+obj.name+" added to course "+data.name))});
        $('#buttonNew2').show();
        $("#buttonNew2").off("click");
        $('#buttonNew2').text("View Batches");
        $('#buttonNew2').click(async function(){await viewBatch(data.id)});
               
    }
    if(type=="batch"){
        $('#buttonNew').show();
        $('#buttonNew').text("View lectures");
        
        $("#buttonNew").off("click");
        $('#buttonNew').click(async function(){await viewLecture(course,data.id)});
        $('#buttonNew2').show();
        $("#buttonNew2").off("click");
        $('#buttonNew2').text("View Students");
        $('#buttonNew2').click(async function(){await viewStudent(course,data.id)});
                
        
    }
    
}
