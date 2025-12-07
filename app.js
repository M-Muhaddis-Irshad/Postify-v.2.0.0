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

// Get authenticated name of user____________________________________________
const userAuthenticatedName = localStorage.getItem('User Name');

// Access the (Array of Object) of created posts for show on DOM & perform other tasks________________________
const createdPosts = JSON.parse(localStorage.getItem('posts')) || [];

const retrieve = () => {

    if (localStorage.getItem('postChecker') !== null) {
        // console.log(typeof createdPosts)

        createdPosts.forEach((keys, index) => {
            // console.log(keys)
            const { id, postingUserName: Name, postDes, postImg, postingTime } = keys;

            document.getElementById('mainTag').innerHTML += `
            
                <div class="postCard" id='${id}'>
                    <div class="userIcon_Name_DeleteCntnr">
                        <div class="child_1st">
                            <img src="logo_Imgs/pfp/Profile_pic2.png" alt="User Icon">
                            <span id="userPostName">${Name}</span>
                            <div class="child_2nd">
                                Created At: <span class="createTime">${postingTime}</span>
                            </div>
                        </div>
                        <div class="deletPost" onclick="deletePost('${id}')"></div>
                    </div>
                    <div class="postedText">
                        ${postDes}
                    </div>
                         <img class="postedImg" src="${postImg}" alt="Image URL">
                    <div class="likeBtn" onclick="likePost()">
                        <sup class="likeCounter">+0</sup>
                    </div>
                </div>
            
            `

        });

    }

}

retrieve()


// Post Deleting function____________________________________________ 
const deletePost = (recievedId) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {

        if (result.isConfirmed) {

            const updatedPosts = createdPosts.filter(post => {
                post.id !== recievedId
                console.log(post)
        });
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            console.log(updatedPosts)

            createdPosts.length = 0;
            createdPosts.push(updatedPosts)

            // updatedPosts.length = 0;
            // console.log(updatedPosts)

            // Remove from DOM
            const postCard = document.getElementById(`${recievedId}`);
            if (postCard) {
                postCard.remove();
                // console.log(true);
            }

            // retrieve()
            // setTimeout(() => {
            //     window.location.reload()
            // }, 2000);

            if (updatedPosts.length === 0) {
                console.log('No posts')
            }

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            });

        }
    });
}

// deletePost("224a3d44-29b5-421d-ba4f-88a9ad2a145d")
// deletePost("224a3d44-29b5-421d-ba4f-88a9ad2a145d")


// SearchBar Start's________________________________
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('change', e => {
    console.log(e)
})