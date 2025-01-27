document.getElementById("projects").style.display = "none";

function input(event) {
    const clickedButton = event.target;
    button = clickedButton.innerText;

    if (button === "Daniel George")
    {
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "block";
    }
    else if (button === "Projects")
    {
        document.getElementById("projects").style.display = "flex";
        document.getElementById("about").style.display = "none";
    }
}

document.getElementById("about").classList.toggle("fadein");
document.getElementById("projects").classList.toggle("fadein");

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", input);
})