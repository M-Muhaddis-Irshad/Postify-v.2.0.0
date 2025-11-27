// All Inputs_______________________________________
const inputs = document.querySelectorAll("input");

// Prevent Form Default Submit_______________________________________
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    register();
});

// Inputs_______________________________________________________________
const user_name = document.getElementById("nameInp");
const signup_mail = document.getElementById("emailInp");
const signup_password = document.getElementById("passwordInp");

const inpsArr = [user_name, signup_mail, signup_password];

// Email Regex_______________________________________________________________
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function register() {

    signup_mail.addEventListener("invalid", (e) => e.preventDefault());

    const emptyInputs = inpsArr.some(inp => inp.value.trim() === "");
    if (emptyInputs) {
        Swal.fire({
            icon: "error",
            title: "All fields are required!",
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    if (!email_regex.test(signup_mail.value.trim())) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email Address",
            text: "Please enter a valid email",
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    if (signup_password.value.length < 8) {
        Swal.fire({
            icon: "error",
            title: "Password must be 8 characters long",
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    if (localStorage.getItem("User Email")) {
        Swal.fire({
            icon: "error",
            title: `Already registered with ${localStorage.getItem("User Email")}`,
            html: `
                If you want to register again, delete your existing account.<br><br>
                <button onclick="del_acnt()" 
                        style="padding:7px 15px; background:red; color:white; border:none; border-radius:5px;">
                    Delete Account
                </button>
            `,
            showConfirmButton: false
        });
        return;
    }

    localStorage.setItem("User Name", user_name.value.trim());
    localStorage.setItem("User Email", signup_mail.value.trim());
    // Don't add trim() cuz password input doesn't have spaces by default____________________
    localStorage.setItem("User Password", signup_password.value);

    // Successful Login
    localStorage.setItem("isLoggedIn", "true");

    Swal.fire({
        icon: "success",
        title: "Account created successfully!",
        showConfirmButton: false,
        timer: 1000
    });

    setTimeout(() => {
        window.location.href = "../../../index.html";
    }, 1000);

    // empty_inputs();
}


function del_acnt() {
    localStorage.removeItem("User Name");
    localStorage.removeItem("User Email");
    localStorage.removeItem("User Password");

    Swal.fire({
        icon: "success",
        title: "Account deleted",
        text: "You can register again now.",
        showConfirmButton: true
    });
}

// const empty_inputs = () => {
//     inpsArr.forEach(inp => inp.value = "");
// };