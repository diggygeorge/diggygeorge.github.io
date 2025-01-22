function input(event) {
    const clickedButton = event.target;
    button = clickedButton.innerText;

    if (button === "Resume")
    {
        console.log("resume downloaded!");
    }
    else if (button === "Daniel George")
    {
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("projects").classList.toggle("fadeout");
        document.getElementById("about").classList.toggle("fadein");
    }
    else if (button === "Projects")
    {
        document.getElementById("projects").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("projects").classList.toggle("fadein");
        document.getElementById("about").classList.toggle("fadeout");
    }
}

document.getElementById("about").classList.toggle("fadein");

const buttons = document.querySelectorAll("#button");
buttons.forEach(button => {
    button.addEventListener("click", input);
})