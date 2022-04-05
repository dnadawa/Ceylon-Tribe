function submitdetails(frm) {
    var errormessage = "";
    // alert(frm.subject.value);

    if (frm.name.value == "") { 
        errormessage += "Name is required \n";
        alert("Name is required")
    } else if (frm.Email.value == "") {
        errormessage += "Email is required \n";
        alert("Email is required")
    } else if (frm.subject.value == "0") {
        errormessage += "Subject is required \n";
        alert("Subject is required")
    } else {
        var box1 = document.getElementById("box1");
        var box2 = document.getElementById("box2");
        var name = document.getElementById("sname");
        var email = document.getElementById("semail");
        var subject = document.getElementById("ssubject");
        var informations = document.getElementById("sinformation");

        box1.className = " hide";
        box2.className = "sdetailsbox show Query_Form";
        name.className = "sdetails";
        email.className = "sdetails";
        subject.className = "sdetails";
        details.className = "sdetails";


        name.innerHTML = "Name:-" + frm.name.value;
        email.innerHTML = "Email:-" + frm.Email.value;
        if (frm.subject.value == "1") {
            var ssubject = "Dilivery";
            subject.innerHTML = "Subject:-" + ssubject;

        } else if (frm.subject.value == "2") {
            var ssubject = "A";
            subject.innerHTML = "Subject:-" + ssubject;

        } else if (frm.subject.value == "3") {
            var ssubject = "B";
            subject.innerHTML = "Subject:-" + ssubject;

        }
        informations.innerHTML = "Details:-" + frm.details.value;

    }

}

function goback() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");


    box1.className = " show Query_Form";
    box2.className = "hide ";
}

function send(form) {
    var box2 = document.getElementById("box2");
    box2.innerHTML = "Sent";
}