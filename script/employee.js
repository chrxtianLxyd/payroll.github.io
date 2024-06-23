import { timeDisplay } from "./time.js";
import { empTime } from "./time.js";

export function timeDisplay() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString()
    const currDT = document.getElementById("emp-time").textContent = formattedDateTime
    setTimeout(timeDisplay, 1000)
}
window.onload = timeDisplay()


export function empTime() {
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