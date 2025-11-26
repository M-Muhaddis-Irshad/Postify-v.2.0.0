const isUserLoggedIn = () => {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        Swal.fire({
            icon: "error",
            title: "User Isn't Logged In",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = "allpages/auth/login/login.html";
        }, 1500);
        return
    }

    // If user is logged in so convert the login button into logout___________________________
    document.getElementById('loginBtn').innerHTML = `
        <a class="navLinks" href="#" onclick="logout()">SignOut <svg class="portal"></svg></a>
    `

}

isUserLoggedIn()

// Logout Function_____________________________________________
function logout() {
    localStorage.setItem("isLoggedIn", "false");
    Swal.fire({
        icon: "success",
        title: "Logged Out",
        showConfirmButton: false,
        timer: 1500
    });

    setTimeout(() => {
        window.location.href = "allpages/auth/login/login.html";
    }, 1500);
}

// logout()

// NavBar Start's_________________________________________

{// NavBar toggling__________________________________________

    const navContainer = document.getElementById('navContainer');
    const toggleBar = document.getElementById('toggleBar');
    const navLinksContainer = document.getElementById('navLinksContainer');
    const bars = document.querySelectorAll('.bar');
    // Check if scrollbar is on top of the window or not__________________
    {
        window.addEventListener("scroll", () => {
            const scroll = this.scrollY;
            (scroll === 0) ? navContainer.classList.remove('scrlStart') : navContainer.classList.add('scrlStart')
        });
    }
    // Add EventListener on ToggleBar__________________
    {
        toggleBar.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            toggleBar.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            bars.forEach(obj => obj.classList.toggle('active'))
            document.body.classList.toggle('active')
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }

    // Portal Svg____________________________________________________

    fetch("../../icons/Portal.svg")
        .then(res => res.text())
        .then(data => {
            document.querySelector(".portal").innerHTML = data;
        });

}
