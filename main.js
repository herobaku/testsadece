const burger = document.querySelector(".burger");
const change = document.querySelectorAll(".burger svg");
const modal = document.querySelector(".modal");

// Hidden close icon
change.forEach((item, index) => {
    if (index === 1) {
        item.style.display = "none";
    }
});

// Visible Burger Menu
burger.addEventListener("click", (e) => {
    change.forEach((item, index) => {
        if (item.style.display === "none") {
            item.style.display = "block";
            document.body.classList.add("no-scroll");
            if (!modal.classList.contains("active")) {
                modal.classList.add("active");
            } else {
                modal.classList.remove("active");
            }
        } else {
            item.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    });
});

console.log("salam")