// Sign Up Btn Start's__________________________

const user_name = document.getElementById('user_name')
const signup_mail = document.getElementById('user_signup_email')
const signup_password = document.getElementById('user_signup_password')

// console.log(document.getElementsByTagName('button')[0]);
// console.log(document.getElementsByTagName('button')[1]);

const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function signup_btn() {


    if (!user_name.value.trim() || !signup_mail.value.trim() || !signup_password.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Error! All fields are required",
            // text: "Something went wrong!",
        });
        return;
    }
    else if (!email_regex.test(signup_mail.value)) {
        Swal.fire({
            icon: "error",
            title: "Error! Invalid email address",
            // text: "Something went wrong!",
        });
        // console.error("Enter valid email address");
        return
    }
    else if (localStorage.getItem('User Name') !== null) {
        Swal.fire({
            icon: "error",
            title: `You're already registered with ${localStorage.getItem('User Email')}`,
            html: `If you want to register again, first delete your previous account by clicking on this <span onclick="del_acnt()"><a href="#"> Delete Account </a></span> and then create a new one.`,
        });

        empty_inputs()

        return;
    }
    // else if (signup_mail.value === localStorage.getItem("User Email")) {
    //     teleporter(params = "sgnup_to_lgn")
    //     Swal.fire({
    //         icon: "error",
    //         title: "This email is already registered",
    //         text: "Please login",
    //     });
    //     return
    // }
    else {

        localStorage.setItem("User Name", user_name.value)
        localStorage.setItem("User Email", signup_mail.value)
        localStorage.setItem("User Password", signup_password.value)

        Swal.fire({
            title: "Account successfully created",
            icon: "success",
            draggable: true
        });

        teleporter(params = "sgnup_to_lgn")

    }

}

// Sign Up Btn End's__________________________


// Account Delete_____________________________________________

function del_acnt() {
    localStorage.clear()
    Swal.fire({
        icon: "success",
        title: "The account has been successfully deleted",
        text: "You can now re-register",
    });
    return;
}

// Account Delete_____________________________________________


// Login Btn Start's__________________________

const login_mail = document.getElementById('user_login_email')
const login_password = document.getElementById('user_login_password')

function login_btn() {

    if (localStorage.getItem('User Name') === null) {
        Swal.fire({
            icon: "error",
            title: "No existing account detected",
            text: "Please register to continue"
        });

        teleporter(params = "lgn_to_sgnup")
        return;
    }
    else if (!login_mail.value.trim() || !login_password.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Error! All fields are required",
        });
        return;
    }
    else if (login_mail.value !== localStorage.getItem("User Email")) {
        Swal.fire({
            icon: "error",
            title: "User email is icorrect",
            text: "Enter correct email address",
        });
        return;
    }
    else if (login_mail.value === localStorage.getItem("User Email") && login_password.value !== localStorage.getItem("User Password")) {
        Swal.fire({
            icon: "error",
            title: "User password is incorrect",
            text: "Enter correct password",
        });
        return;
    }
    else if (login_mail.value === localStorage.getItem("User Email") && login_password.value === localStorage.getItem("User Password")) {
        Swal.fire({
            title: "Login Successfully",
            icon: "success",
            draggable: true
        });
        empty_inputs()
        return;
    }

}

// Login Btn End's__________________________


// Enter key support__________________________
const login_arr = [login_mail, login_password]

login_mail.addEventListener('keydown', (key) => {
    if (key.code === 'Enter') login_btn()
});
login_password.addEventListener('keydown', (key) => {
    if (key.code === 'Enter') login_btn()
});
// Enter key support__________________________


// Teleporter Start's__________________________

const inputs = document.getElementsByTagName("input")
let input_flg = true;

const signup = document.getElementById('signup_box');
const login = document.getElementById('login_box');

function teleporter(params) {
    if (params === 'sgnup_to_lgn') {
        // console.log(`pass`);
        signup.classList.add('hide');
        login.classList.remove('hide');

        input_flg = false;
        // return
    }
    else if (params === 'lgn_to_sgnup') {
        // console.log('pass2');
        login.classList.add('hide');
        signup.classList.remove('hide');

        input_flg = false;
        // return
    }

    if (!input_flg) {
        empty_inputs()
    }
}


// Teleporter End's__________________________

// All inputs clear function____________________-

function empty_inputs() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
}

// All inputs clear function____________________-