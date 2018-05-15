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
