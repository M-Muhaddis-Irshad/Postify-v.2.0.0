{// Stop the default behavior of <form>____________________________________
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        // event.preventDefault();
        post()
    })
}

const userEmail = localStorage.getItem('User Email');
const sessionName = localStorage.getItem('User Name');

document.getElementById('userName').value = sessionName;


// const d = new Date()
// const hours = d.getHours();
// const seconds = d.getSeconds();
// document.getElementById('createTime').innerText = `
// ${seconds}
// `
const post = () => {

    const userDOMName = document.getElementById('userName').value;

    if (!userDOMName.trim()) {
        Swal.fire({
            title: `Please enter the <span class="alertText">Name</span>`,
            icon: "error",
            showConfirmButton: false,
            timer: 1000
        });
        return
    }

    const userName = (userDOMName !== sessionName) ? userDOMName : sessionName;

}
