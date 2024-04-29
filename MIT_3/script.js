var res=document.getElementById("Alert")
var ind=document.getElementById("indicationFN")
var ind2=document.getElementById("indicationLN")
var ind3=document.getElementById("indicationM")
var ind4=document.getElementById("indicationP")
var image=document.querySelector(".indication img")
function get(){
    var firstname=document.getElementById("firstname").value
    var lastname=document.getElementById("lastname").value
    var email =document.getElementById("email").value
    var pass =document.getElementById("password").value
   
    if(firstname.length==0 && lastname.length==0 && email.length==0 && pass.length==0 ){
        res.innerHTML="Fill the input fields "
        res.style.color = "red";
        res.style.fontFamily="Poppins"
        image.style.display="block"
    }
    else if(firstname.length==0){
        ind.innerHTML="First Name should not be empty."
        ind.style.color = "red";
        ind.style.fontFamily="Poppins"
        image.style.display="block"
    }
    else if(lastname.length==0){
        ind2.innerHTML="Last Name should not be empty."
        ind2.style.color = "red";
        ind2.style.fontFamily="Poppins"
        image.style.display="block"
    }
    else if(email.length==0){
        ind3.innerHTML="Looks like this is not an email."
        ind3.style.color = "red";
        ind3.style.fontFamily="Poppins"
        image.style.display="block"
    }
    else if(pass.length==0){
        ind4.innerHTML="Password cannot be empty."
        ind4.style.color = "red";
        ind4.style.fontFamily="Poppins"
        image.style.display="block"
    }
    else if(firstname==pass){
        res.innerHTML="Password and Username should not be same."
        res.style.fontFamily="Poppins"
        res.style.color = "red";
        image.style.display="block"
    }
    else if(firstname.length<4){
        ind.innerHTML="Username should be atleast above 4 characters"
        ind.style.fontFamily="Poppins"
        ind.style.color = "red";
        image.style.display="block"
        
    }
    else if(pass.length<6 || pass.length>16){
         ind4.innerHTML="Password length should be 6 to 16 characters."
         ind4.style.fontFamily="Poppins"
         ind4.style.color = "red";
         image.style.display="block"
    }
    else if (!/[A-Z]/.test(password)) {
        ind4.innerHTML= "Password should contain at least 1 uppercase letter.";
        ind4.style.fontFamily="Poppins"
        ind4.style.color = "red";
        image.style.display="block"
    }

    else if (!/[a-z]/.test(password)) {
        ind4.innerHTML= "Password should contain at least 1 lowercase letter.";
        ind4.style.fontFamily="Poppins"
        ind4.style.color = "red";
        image.style.display="block"
    }

    else if (!/[0-9]/.test(password)) {
        ind4.innerHTML="Password should contain at least 1 number.";
        ind4.style.fontFamily="Poppins"
        ind4.style.color = "red";
        image.style.display="block"
    }

    else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        ind4.innerHTML="Password should contain at least 1 special character.";
        ind4.style.fontFamily="Poppins"
        image.style.display="block"
    }
    else{

    }    return true;   
}