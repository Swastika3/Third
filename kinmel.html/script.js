function validateform(){
    let a = document.getElementById("pass").value;
    let b = document.getElementById("cpass").value;
    let c=document.getElementById("phone").value;
if(a!=b){
document.getElementById("ccp").innerHTML="**password doesnot match**";
}
else{
document.getElementById("ccp").innerHTML="";
}
if(a.length<8){
    document.getElementById("cp").innerHTML="**password should be of 8 characters**";
    return false;
}
if(a.search(/[0-9]/)==-1){
    document.getElementById("cp").innerHTML="**password should be of at least of one numeric characters**";
return false;
}
if(a.search(/[A-Z]/)==-1){
    document.getElementById("cp").innerHTML="**password should be of at least of one uppercase characters**";
return false;
}
if(a.search(/[!\@\#\$\%\^\&\*\?]/)==-1){
    document.getElementById("cp").innerHTML="**password should be of at least of one special characters**";
return false;
}
else{
document.getElementById("cp").innerHTML="";
}
if(c==""){
    document.getElementById("con").innerHTML="** Contact number should be mentioned**";
    return false;
    }
    if((c.charAt(0)!=9)&&(c.charAt(1)!=8)){
	    document.getElementById("con").innerHTML="**Number must start with 98**";
	    return false;
	}
if(c.length<10){
    document.getElementById("con").innerHTML="**Number should be  of 10 digits**";
    return false;
}
if((c.length>10)){
    document.getElementById("con").innerHTML="**Number should be  of 10 digits**";
    return false;
}	
else{
    document.getElementById("con").innerHTML="";
}   
    };



