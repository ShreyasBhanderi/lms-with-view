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
        if(subjectname.val().length==0 || courseId.val().length==0){
            await window.alert("Subject name or courseId cannot be empty")
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