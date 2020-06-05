// Cover

// Sticky menu background
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".Navbar");
    let className = "animate-navbar-opacity";
    if (window.scrollY > 150) {
        navbar.classList.add(className);
    } else {
        navbar.classList.remove(className);
    }
});

// function addText(icon, text) {
//     icon.classList.remove("Navbar-Nav-NavItems-Links-Icons");
//     icon.classList.add("Navbar-Nav-NavItems-Links-Icons-hide");
//     text.classList.remove("Navbar-Nav-NavItems-NavText-hide");
//     text.classList.add("Navbar-Nav-NavItems-NavText");
// }

// function removeText(icon, text) {
//     text.classList.remove("Navbar-Nav-NavItems-NavText");
//     text.classList.add("Navbar-Nav-NavItems-NavText-hide");
//     icon.classList.remove("Navbar-Nav-NavItems-Links-Icons-hide");
//     icon.classList.add("Navbar-Nav-NavItems-Links-Icons");
// }

// function changeText(elements, icons, texts) {
//     for (let i = 0; i < 4; i++) {
//         elements[i].addEventListener("mouseover", addText(icons[i], texts[i]));

//         elements[i].addEventListener(
//             "mouseout",
//             removeText(icons[i], texts[i])
//         );
//     }
// }

// let navElements = document.querySelectorAll(".Navbar-Nav-NavItems");
// let navIcons = document.querySelectorAll(".Navbar-Nav-NavItems-Links-Icons");
// let navTexts = document.querySelectorAll(".Navbar-Nav-NavItems-NavText");

// changeText(navElements, navIcons, navTexts);
