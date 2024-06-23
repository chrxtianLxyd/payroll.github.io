// for registration
let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")
let uname = document.querySelector("#uname")
let email = document.querySelector("#email")
let pword = document.querySelector("#pword")
let cpass = document.querySelector("#cpass")
let sex = document.querySelector("#sex")
let bday = document.querySelector("#bday")
let error = document.querySelector("#errormsg")
let form = document.querySelector("#regForm")

let fnameArray = []
let lnameArray = []
let unameArray = []
let emailArray = []
let pwordArray = []
let cpassArray = []
let sexArray = []
let bdayArray = []

// for log in
let unameLog = document.querySelector("#unameLog")
let pwordLog = document.querySelector("#pwordLog")
let form2 = document.querySelector("#logForm")

/////// Functions

//// registration validation
form.addEventListener('submit', (e) => {
    let messages = []
    if(fname.value === '' || fname.value == null) {
        console.log("first name is empty")
        messages.push("Please fill in your first name")
        error.innerText = messages
        fname.style.border = "2px solid red"
        fname.style.color = "red"
        fname.placeholder = messages
        fnameArray.push = fname.value
        e.preventDefault()
    }else if(lname.value === '' || lname.value == null) {
        console.log("last name is empty")
        messages.push("Please fill in your last name")
        error.innerText = messages
        lname.style.border = "2px solid red"
        lname.style.color = "red"
        lname.placeholder = messages
        lnameArray.push = lname.value
        e.preventDefault()
    }else if(uname.value === '' || uname.value == null) {
        console.log("username is empty")
        messages.push("Please fill in your username")
        error.innerText = messages
        uname.style.border = "2px solid red"
        uname.style.color = "red"
        uname.placeholder = messages
        unameArray.push = uname.value
        e.preventDefault()
    }else if(email.value === '' || email.value == null) {
        console.log("email is empty")
        messages.push("Please fill in your email address")
        error.innerText = messages
        email.style.border = "2px solid red"
        email.style.color = "red"
        email.placeholder = messages
        emailArray.push = email.value
        e.preventDefault()
    }else if(pword.value === '' || pword.value == null) {
        console.log("password is empty")
        messages.push("Password is empty")
        error.innerText = messages
        pword.style.border = "2px solid red"
        pword.placeholder = messages
        pwordArray.push = pword.value
        e.preventDefault()
    }else if(cpass.value != pword.value || cpass.value == null && cpass.value === '') {
        console.log("password does not match")
        messages.push("Password does not match")
        error.innerText = messages
        cpass.style.border = "2px solid red"
        pword.style.border = "2px solid red"
        cpass.placeholder = messages
        cpassArray.push = cpass.value
        e.preventDefault()
    }else if(sex.value === '' || sex.value == null) {
        console.log("need sex")
        messages.push("Please fill in your sex")
        error.innerText = messages
        sex.style.border = "2px solid red"
        sexArray.push = sex.value
        e.preventDefault()
    }else if(bday.value === '' || bday.value == null) {
        console.log("need birthday")
        messages.push("Please fill in your birthday")
        error.innerText = messages
        bday.style.border = "2px solid red"
        bdayArray.push = bday.value
        e.preventDefault()
    }else {
        null
    }
})


//// log in validation
form2.addEventListener('login', (e) => {
    if(unameLog.value !== unameArray || unameLog.value !== emailArray){
        console.log("user does not exist")
        e.preventDefault()
    }
})

console.log(unameArray)



// ////time
// const timeDisplay = ()=> {
//     const now = new Date();
//     const formattedDateTime = now.toLocaleString()
//     const currDT = document.getElementById("emp-time").textContent = formattedDateTime
//     setTimeout(timeDisplay, 1000)
// }
// window.onload = timeDisplay()


// const empTime = ()=> {
//     let timeBtn = document.querySelector("#timeBtn")
//     if(timeBtn.innerText === "Time In") {
//         timeBtn.innerText = ("Time Out")
//         timeBtn.style.backgroundColor = "#e63946"
//         timeBtn.style.color = "#ffffff"
//     } else {
//         timeBtn.innerText = ("Time In")
//         timeBtn.style.backgroundColor = "#80ed99"
//         timeBtn.style.color = "#000000"
//     }
// }

