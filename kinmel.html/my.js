function validateform(){
    let password= document.getElementById("pass").Value;
    let cpassword= document.getElementById("cpass").Value;
    let number= document.getElementById("phone").Value;

    if(password!=cpassword){
        // document.getElementById("displayerr").value="password doesnt match";
        alert('password doesnt match');
    }


}