loginButton.addEventListener("onclick", (event) => {
    event.preventDefault(); 

    let username = unameLog.value.trim();
    let password = pwordLog.value.trim();

    if (username === "" || password === "") {
        alert("emptyyyy");
        return;
    }

    if (validateCredentials(username, password)) {
        window.location.href = "employee.html";
    } else {
        alert("Invalid username or password. hahhahaha.");
    }
});