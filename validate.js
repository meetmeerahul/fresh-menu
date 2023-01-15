var msg = false;
var email = false;

function emailcheck() {
    var val = document.getElementById("email").value;
    var v = null;
    v = val.trim();
    document.getElementById("email").value = v;
    if (v == "" || val == null) {
        document.getElementById("lbemail").innerHTML =
            " This field must be filled out";
        email = false;
        document.getElementById("btn-send").disabled = true;
    } else if (!isNaN(v[0])) {
        document.getElementById("lbemail").innerHTML =
            "Email doesnt starts with a number";
        email = false;
        document.getElementById("btn-send").disabled = true;
    } else if (!/^[a-zA-Z][a-zA-z._0-9]{3,30}[a-zA-Z0-9][@][a-zA-Z]{3,10}[.][a-zA-Z]{2,10}$/.test(
            v
        )) {
        document.getElementById("lbemail").innerHTML = " Invalid email";
        email = false;
        document.getElementById("btn-send").disabled = true;
    } else {
        document.getElementById("lbemail").innerHTML = "";
        email = true;
        if (email && msg) {
            document.getElementById("btn-send").disabled = false;
        }
    }
}

function msgcheck() {
    var val = document.getElementById("message").value;
    var v = null;
    v = val.trim();
    document.getElementById("message").value = v;
    var n = v.length;
    console.log(n);
    if (v == "" || val == null) {
        document.getElementById("lbl-msge").innerHTML =
            "This field must be filled out";
        msg = false;
        document.getElementById("btn-send").disabled = true;
    }
    if (n < 50) {
        document.getElementById("lbl-msge").innerHTML =
            "Message should be atleast 50 letters long";
        msg = false;
        document.getElementById("btn-send").disabled = true;
    } else {
        document.getElementById("lbl-msge").innerHTML = "";
        msg = true;
        if (email && msg) {
            document.getElementById("btn-send").disabled = false;
        }
    }
}