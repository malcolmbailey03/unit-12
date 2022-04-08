let userNum = document.document.getElementById("getNumber");
userNum.addEventListener("keydown", function(e) {
    if (e.keyCode == 13){
        run {e};
    }
};
    
function run(){ 
    document.getElementById("paragraph").innerHtml = "hello world";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "affffff";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumbers();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "affffff";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = ran;
    y.style.backgroundColor = "affffff";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return ran;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    
}  
    if ( a!= b) {
        z.innerHTML = "Numbers are not the. Computer got"
        + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#ff000";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    } else if (a == b) {
        z.innerHTML = "Numbers are the same. Computer got " +
        + b + ", and usergot " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#00ff00";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    }

    resetInput();

}  

function resetInput() {
    document.getElementById("getNumber").value = "";
}


}