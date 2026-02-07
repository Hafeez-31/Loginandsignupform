const form = document.querySelector(".forgot-form")
const email = document.getElementById("emailid")
const newpassword = document.getElementById("newpassword")
const confirmnewPassword = document.getElementById("confirmnewpassword")
const msg = document.getElementById("msg")
const togglenewPassword = document.getElementById("togglenewPassword")
const toggleConfirmnewPassword = document.getElementById("toggleconfirmnewPassword")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.style.color = "red";
    msg.textContent = "";

    const emailValue = email.value.trim();
    const newpasswordValue = newpassword.value.trim();
    const confirmnewPasswordValue = confirmnewPassword.value.trim();

    if (emailValue === "") {
        msg.textContent = "Please Enter the valid Email";
        return;
    }

    if (!emailValue.includes("@")) {
        msg.textContent = "Enter a valid email";
        return;
    }

    if (newpasswordValue === "" || confirmnewPasswordValue === "") {
        msg.textContent = "Please Enter New Password"
        return;
    }

    if (newpasswordValue !== confirmnewPasswordValue) {
        msg.textContent = "Passwords do not match";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Password Changed Successfully";

    form.reset();
})

togglenewPassword.addEventListener("click", () => {
    if (newpassword.type === "password") {
        newpassword.type = "text";
    } else {
        newpassword.type ="password"
        togglenewPassword.textContent = "show";
    }
});

toggleConfirmnewPassword.addEventListener("click", () => {
    if (confirmnewPassword.type === "password") {
        confirmnewPassword.type = "text";
    } else {
        confirmnewPassword.type = "password";
        toggleConfirmnewPassword.textContent = "show";
    }
});