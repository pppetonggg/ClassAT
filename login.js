$(document).ready(function(){
    console.log("Loaded")
    $('#submit-login').click(function(){
        const email = $("#email").val();
        const password = $("#password").val();
        $.post('http://localhost/ClassAT2/api/login.php',{
            email,
            password
          },
          function(data, status){
            //store name once when login via localstorage in order to use variable for another work
            localStorage.setItem("teacher_name",data[0].Teacher_name);
            if(data[0].msg){
                alert("Unauthorization");
            }else{
                //redirect to certain page specify in line 17
                window.location.replace('home.html')
            }
          })
    })
  });