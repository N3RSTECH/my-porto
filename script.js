function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

const roles = ["Bug Hunter", "Cybersecurity Enthusiast", "Backend Developer", "Frontend Developer", "Web Development"];
let i = 0;
const roleEl = document.getElementById("role");

function rotateRole() {
    roleEl.innerText = roles[i];
    i = (i + 1) % roles.length;
}

setInterval(rotateRole, 2000);
rotateRole();