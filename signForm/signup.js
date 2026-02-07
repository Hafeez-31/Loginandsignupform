const form = document.querySelector(".signup-form")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const email = document.getElementById("emailid")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmpassword")
const msg = document.getElementById("msg")
const togglePassword = document.getElementById("togglePassword")
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword")
const policy = document.getElementById("policy")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.style.color = "red";
    msg.textContent = "";

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (firstNameValue === "" || lastNameValue === "") {
        msg.textContent = "First and Last name are required";
        return;
    }
    if (emailValue === "") {
        msg.textContent = "Please Enter the email";
        return;
    }

    if (emailValue === "" || !emailValue.includes("@")) {
        msg.textContent = "Enter a valid email";
        return;
    }

    if (confirmPasswordValue === "") {
        msg.textContent = "Enter a confirm password"
        return;
    }

    if (passwordValue !== confirmPasswordValue) {
        msg.textContent = "Passwords do not match";
        return;
    }

    if (!policy.checked) {
        msg.textContent = "Please accept privacy and policy";
        return;
    }
    msg.style.color = "green";
    msg.textContent = "Signup successfully";

    form.reset();
})

togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }
})

toggleConfirmPassword.addEventListener("click", () => {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.textContent = "Show";
    }
})
