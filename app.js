let closepas = document.getElementById("close");
let show = document.getElementById("show");
let passwordInput = document.getElementById("input");

show.addEventListener("click", () => {
    show.style.display = "none";
    closepas.style.display = "block";
    passwordInput.type = "password";
});

closepas.addEventListener("click", () => {
    closepas.style.display = "none";
    show.style.display = "block";
    passwordInput.type = "text";
});