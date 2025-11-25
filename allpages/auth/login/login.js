// All Inputs______________________________________
const inputs = document.querySelectorAll('input');

{// Stop the default behavior of <form>____________________________________
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        login();
        inputs.forEach(inp => inp.blur());
    });
}

const isUserLoggedIn = () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
        Swal.fire({
            icon: "error",
            title: "User already Logged In",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            window.location.href = "../../../index.html";
        }, 1500);
    }
}

isUserLoggedIn()



// Login Inputs______________________________________
const login_email = document.getElementById('emailInp');
const login_password = document.getElementById('passwordInp');

// Email Checking Regex______________________________
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// Login Function______________________________________
function login() {

    // Handling browser invalid popup
    login_email.addEventListener('invalid', e => e.preventDefault());

    // Empty fields check
    if (login_email.value.trim() === "" || login_password.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Error! All fields are required",
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    // Email format check
    if (!email_regex.test(login_email.value)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email Address",
            text: "Please enter a valid email",
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    // LocalStorage stored values
    const storedEmail = localStorage.getItem('User Email');
    const storedPassword = localStorage.getItem('User Password');

    // Check if account exists
    if (!storedEmail || !storedPassword) {
        Swal.fire({
            icon: "error",
            title: "Account Not Found",
            text: "Please register first before logging in.",
            showConfirmButton: false,
            timer: 2000
        });
        empty_inputs();
        return;
    }

    // Email matching
    if (login_email.value !== storedEmail) {
        Swal.fire({
            icon: "error",
            title: "Incorrect Email Address",
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    // Password matching
    if (login_password.value !== storedPassword) {
        Swal.fire({
            icon: "error",
            title: "Wrong Password",
            text: "Please try again",
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    // Successful Login
    localStorage.setItem("isLoggedIn", "true");

    Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500
    });

    setTimeout(() => {
        window.location.href = "../../../index.html";
    }, 1500);
}



// Empty Inputs Function______________________________________
const empty_inputs = () => {
    login_email.value = "";
    login_password.value = "";
}
