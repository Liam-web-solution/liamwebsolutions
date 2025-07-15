var firstNameError = document.getElementById("firstName-error");
var lastNameError = document.getElementById("lastName-error");
var phoneError = document.getElementById("phone-error");
var messageEror = document.getElementById("message-error");
var btnError = document.getElementById("submit-error");

function validatefirstName(){
    var firstName = document.getElementById("firstName").value;
    if(firstName.length == 0){
     firstNameError.innerHTML = " name is required";
    return false;
}
    firstNameError.innerHTML = "✅";
    return true;
};

function validatelastName(){
    var lastName = document.getElementById("lastName").value;
    if (lastName.length == 0){
        lastNameError.innerHTML = " name is required"
        return false;
    };
    lastNameError.innerHTML = "✅";
    return true;
     

};

function validatephone(){
    var phone = document.getElementById("tel").value;
    if(phone.length == 0){
        phoneError.innerHTML = "phone No. required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML ="10 digits required"
        return false;
    }
    if(!phone.match(/[0-9]{10}$/)){
        phoneError.innerHTML = "digits only";
        return false;
    }
    phoneError.innerHTML = "✅";
     
};

function validatemessage(){
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;

    if (message.length == 0) {
         messageEror.innerHTML = 'Type in a message please';
         return false;
    }
    if (left> 0) {
         messageEror.innerHTML = left + ' more characters requred, atleast';
        return false;    
    }
     messageEror.innerHTML = '✅';
    return true;
}
    
 /* function validateform(){
    if(!validatefirstName() || !validatelastName() || !validatephone() || !validatemessage()){
        btnError.style.display = "block"
        btnError.innerHTML = "please fix errors to submit"
        setTimeout(function(){btnError.style.display= "none";}, 3000)
        return false
    }
    btnError.innerHTML = " "
    return true 

}*/
