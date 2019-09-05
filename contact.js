function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
	var name = document.myForm.name.value;
    var subject = document.myForm.subject.value;
    var email = document.myForm.email.value;
    var message = document.myForm.message.value;

    }
    
 var nameErr = subjectErr = emailErr = messageErr= true;
    
  if(name == "") {
        printError("nameErr", "Enter at least 3 characters long");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }    
   if(subject == "") {
        printError("subjectErr", "Enter at least 3 characters long");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(subject) === false) {
            printError("subjectErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("subjectErr", "");
            subjectErr = false;
        }
    }
    
   if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
       var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
   if(message == "") {
        printError("messageErr", "Enter at least 20 characters long");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(subject) === false) {
            printError("messageErr", "Enter at least 20 characters long");
        } else{
            printError("messageErr", "");
            messageErr = false;
        }
    }
    

    
  if((nameErr || subjectErr || emailErr || messageErr ) == true) {
       return false;
    } else {
       var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Subject: " + Subject + "\n" +
                          "Email Address: " + email + "\n" +
                          "Message: " + message + "\n";
                }
       alert(dataPreview);
    }

