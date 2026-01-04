function showPage(type) {
    document.querySelectorAll(".page").forEach(div => {
        div.style.display = "none";
    });
    document.querySelector("." + type).style.display = "block";
}

// Button Clicks

//       const nButton = 4
//       let buttonList = ["h-btn", "m-btn", "d-btn", "a-btn"]
//       let menuList = ["h", "m", "d", "a"]

// This code listenes for a click .addEventListener
//       for(let i = 0; i < nButton; i++) {
//         document.getElementById(buttonList(i)).addEventListener('click', () => showPage(menuList(i)));
//       }



document.getElementById("h-btn").addEventListener('click', () => showPage("h"));
document.getElementById("m-btn").addEventListener('click', () => showPage("m"));
document.getElementById("d-btn").addEventListener('click', () => showPage("d"));
document.getElementById("a-btn").addEventListener('click', () => showPage("a"));