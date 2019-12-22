
function create_attendance(student_id){
  const status = document.getElementById(student_id).value;
  $.post('http://localhost/ClassAT2/api/create-attendance.php',{
    status,
    Subject_ID: localStorage.getItem('subject_id'),
    Std_ID: student_id
  },function(data,status){
    console.log(data)
  })
}
$(document).ready(function(){
    $("#subjects").html(localStorage.getItem('subject'));

    $.get('http://localhost/ClassAT2/api/list-student.php',function(data,status){
      console.log(data)
        for(let i=0; i<data.length;i++){
            //line 59
            $('#student_list').append(`<tr>
            <th scope="row"><img class="d-block rounded-circle" src="${data[i].Pic}" width="60"></th>
            <td class="text-left" style="vertical-align: middle">${data[i].Std_ID}</td>
            <td class="text-capitalize" style="vertical-align: middle">${data[i].Std_Name}</td>
            <td style="vertical-align: middle">
              <select id="${data[i].Std_ID}" onchange="create_attendance('${data[i].Std_ID}')" class="btn btn-primary dropdown-toggle">
                <option value="0">-- select --</option>
                <option value="present" name="present">Present</option>
                <option value="late" name="late">Late</option>
                <option value="absent" name="absent">Absent</option>
              </select>
            </td>
          </tr>`)
        }    
    })
})