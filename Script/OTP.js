var n;
function sendotp(){
    var Number=document.getElementById("number").value
    var Email=document.getElementById('email').value
    var Name=document.getElementById("name").value
    if(!Name || !Email || !Number ){
        alert("Fill Required credencial")
    }
    else{
        if(Email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {   
            if(Number.length != 10){
                alert("Invalid Number")

            }
            else{
               window.open("Getotp.html")
            }
        }
        else{
            alert(" not a valid email id")
        }
    }
}
