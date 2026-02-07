const form = document.querySelector(".login-form")
const email = document.getElementById("emailid")
const password = document.getElementById("password")
const msg = document.getElementById("msg")
const togglePassword = document.getElementById("togglePassword")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.style.color = "red";
    msg.textContent = "";

    if (email.value.trim() === "" || password.value.trim() === "") {
        msg.textContent = "Please fill email and password";
        return;
    } 

    if (!email.value.includes("@")) {
        msg.textContent = "Please enter a valid email";
        return;
    }
    

    msg.style.color = "green";
    msg.textContent = "Login submitted successfully";

    form.reset();
    password.type = "password";
    togglePassword.textContent = "show";
});

togglePassword.addEventListener("click", () =>{
    if(password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }
})
