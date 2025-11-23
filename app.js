let user_Name;
let user_Mail;

const isUserAvailable = () => {

    const userName = localStorage.getItem('User Name');
    const userMail = localStorage.getItem('User Email');

    if (userMail === null) {
        alert(`User isn't Login`)
        window.location.href = 'allPages/authLcl/auth.html';
        return
    }

    user_Name = userName;
    user_Mail = userMail;
    loginBtn.innerHTML = `<a href="#" class="navLinks lastLink" id="signout">Signout <svg class="portal"></svg></a>`

    document.getElementById('signout').addEventListener('click', () => {
        localStorage.setItem("User Name")
        localStorage.setItem("User Email")
        localStorage.setItem("User Password")
        isUserAvailable()
    })

    return

}

isUserAvailable()

const userDomName = document.getElementById('userDomName');
userDomName.innerText = user_Name
// console.log(user_Name)
// console.log(user_Mail)

