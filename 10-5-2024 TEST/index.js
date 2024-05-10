var pass = document.getElementById("pass");
var result = document.getElementById("res");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");

pass.addEventListener("input", function () {
    var password = pass.value;
    var strength = "Weak";
    one.style.display="block";
    two.style.display="none";
    three.style.display="none";
    if(password.length==0){
        one.style.display="none"
    }

    if (password.length >= 4) {
        var LowerCase = /[a-z]/.test(password);
        var UpperCase = /[A-Z]/.test(password);
        var Number = /\d/.test(password);
        var SpecialChar = /[!@#$]/.test(password);

        if (LowerCase && UpperCase && Number && SpecialChar) {
            strength = "Strong";
            three.style.display="block";
            two.style.display="block";
        } else if ((LowerCase || UpperCase) && Number) {
            strength = "Medium";
            two.style.display="block";
        }
    }

    result.textContent = `Password Strength: ${strength}`;
});
