//store local data here
function select_subject(subject_id, subject_name){
    localStorage.setItem('subject_id', subject_id);
    localStorage.setItem("subject",subject_name);
    window.location.replace('checkAttendance.html');
    
}
$(document).ready(function(){


    $("#teacher-name").html(localStorage.getItem('teacher_name'))
    $.get('http://localhost/ClassAT2/api/list-subjects.php',function(data,status){
        //use subject from database to show in homepage in line 19
        for(let i = 0; i < data.length; i++){
            $("#list-subjects").append(`<div class="col-md-12 pb-3">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active disabled" contenteditable="true"> Semester 1 of 2019</a>
              <a onclick="select_subject('${data[i].Subject_ID}', '${data[i].Subject_Name}')" class="list-group-item list-group-item-action" id="subject">${data[i].Subject_ID} - ${data[i].Subject_Name}</a>
            </div>
          </div>`)
        }
    })
})