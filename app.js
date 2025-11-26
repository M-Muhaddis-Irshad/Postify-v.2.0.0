const userAuthenticatedName = localStorage.getItem('User Name');

const userPostName = document.getElementById('userPostName').innerText = userAuthenticatedName;

console.log(userPostName)
