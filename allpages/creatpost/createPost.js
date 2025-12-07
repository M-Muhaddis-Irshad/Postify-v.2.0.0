const isUserLoggedIn = () => {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        Swal.fire({
            icon: "error",
            title: "User Isn't Logged In",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = "../auth/login/login.html";
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
        window.location.href = "../auth/login/login.html";
    }, 1500);
}

// logout()




{// Stop the default behavior of <form>____________________________________
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        post()
    })
}

// const userEmail = localStorage.getItem('User Email');
const sessionName = localStorage.getItem('User Name');

const postText = document.getElementById('textArea');
const uplodedImg = document.getElementById('uplodedImg');

// Get User Name from session & show on DOM____________________________
document.getElementById('userName').value = sessionName;

let lclUrl;

uplodedImg.addEventListener('change', event => {
    // document.getElementById('uploaderLabel').style.display = 'none';
    const localUrl = URL.createObjectURL(event.target.files[0]);
    // console.log(localUrl)
    lclUrl = localUrl
    document.getElementById('imgOnDOM').src = localUrl;
    document.getElementById('imgOnDOM').style.display = 'block';
});






// Posting date & time_________________________________________________
const d = new Date();
const full_date = `
                 ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} 
                 At: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}
`;

const post = () => {

    // Generate Random Id For Each Posts____________________________
    const randomId = crypto.randomUUID();

    const userDOMName = document.getElementById('userName').value;

    if (!userDOMName.trim()) {
        Swal.fire({
            title: 'Error',
            html: `Please enter the <span class="alertText">Name</span>`,
            icon: "error",
            showConfirmButton: false,
            timer: 2000
        });
        return
    }
    if (!postText.value.trim()) {
        Swal.fire({
            title: 'Error',
            html: `Please type comment about your <span class="alertText">POST</span>`,
            icon: "error",
            showConfirmButton: false,
            timer: 2000
        });
        return
    }
    if (lclUrl === undefined) {
        Swal.fire({
            title: 'Error',
            html: `Please select an <span class="alertText">IMAGE</span>`,
            icon: "error",
            showConfirmButton: false,
            timer: 2000
        });
        return
    }

    const userName = (userDOMName !== sessionName) ? userDOMName : sessionName;

    console.log(`
    User Name: ${userName}
    Post Text: ${postText.value}
    Post Image: ${lclUrl}
    Posting Time: ${full_date}
            `);

    // console.log(localStorage.getItem('postChecker'));

    const arrOfPostObjects = JSON.parse(localStorage.getItem('posts')) || []

    arrOfPostObjects.push(
        {
            id: randomId,
            postingUserName: userName,
            postDes: postText.value,
            postImg: lclUrl,
            postingTime: full_date
        }
    )

    localStorage.removeItem('postChecker');

    if (localStorage.getItem('postChecker') === null) {
        localStorage.setItem("postChecker", 'postAvailable')
        const cnvrtObjToString = JSON.stringify(arrOfPostObjects);
        localStorage.setItem('posts', cnvrtObjToString)
    }

    // console.log(localStorage.getItem('postChecker'));

    // Remove focus from (POST) button___________________________
    setTimeout(() => {
        document.getElementById('postBtn').blur();
    }, 500);

    Swal.fire({
        icon: "success",
        title: 'Post created <span class="successMsg">Successfully</span>',
        // html: `Post created <span class="successMsg">Successfully</span>`,
        showConfirmButton: false,
        timer: 1000
    });

    setTimeout(() => {
        window.location.href = "../../index.html";
    }, 1000);

}

const PostData = JSON.parse(localStorage.getItem('posts'))

if (localStorage.getItem('postChecker') !== null) {
    PostData.forEach((data, index) => {
        // console.log(data)
        const { id, postingUserName: Name, postDes, postImg } = data;
        console.log(
            `
Post ${++index} Data:
Id: ${id}
Name: ${Name}
Description: ${postDes}
Image: ${postImg}
            `
        )

    });
}
