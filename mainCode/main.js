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

    fetch("../icons/Portal.svg")
        .then(res => res.text())
        .then(data => {
            document.querySelector(".portal").innerHTML = data;
        });

}

// CopyRight-Claim Date___________________________________

const d = new Date();

const year = document.getElementById('year').innerText = d.getFullYear();