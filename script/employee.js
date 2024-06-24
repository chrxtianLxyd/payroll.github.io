const empName = document.querySelector("#emp-name")
const empEID = document.querySelector("#emp-id")
const empPos = document.querySelector("#emp-pos")
const empSex = document.querySelector("#emp-sex")
const empBDay = document.querySelector("#emp-bday")

empName.innerText = ("text1")
empEID.innerText = ("text2")
empPos.innerText = ("text3")
empSex.innerText = ("text4")
empBDay.innerText = ("text5")


////time
const timeDisplay = ()=> {
    const now = new Date();
    const formattedDateTime = now.toLocaleString()
    const currDT = document.getElementById("emp-time").textContent = formattedDateTime
    setTimeout(timeDisplay, 1000)
}
window.onload = timeDisplay()


const empTime = ()=> {
    let timeBtn = document.querySelector("#timeBtn")
    if(timeBtn.innerText === "Time In") {
        timeBtn.innerText = ("Time Out")
        timeBtn.style.backgroundColor = "#e63946"
        timeBtn.style.color = "#ffffff"
    } else {
        timeBtn.innerText = ("Time In")
        timeBtn.style.backgroundColor = "#80ed99"
        timeBtn.style.color = "#000000"
    }
}

let logForm = document.getElementById("logForm");
let unameLog = document.getElementById("unameLog");
let pwordLog = document.getElementById("pwordLog");
let loginButton = document.getElementById("login");

function validateCredentials(username, password) {

    let employees = [
        { username: "hey", password: "123" },
        { username: "hello", password: "321" },
    ];

    for (let user of storedUsers) {
        if (user.username === username && user.password === password) {
            return true; // login success
        }
    }   

    return false; // fail
}

