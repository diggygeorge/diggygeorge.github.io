function input(event) {
    const clickedButton = event.target;
    button = clickedButton.innerText;

    if (button === "About Me") {
        document.getElementById("projects").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("about").classList.add("fadein");
    } else if (button === "Projects") {
        document.getElementById("projects").style.display = "flex";
        document.getElementById("about").style.display = "none";
        document.getElementById("projects").classList.add("fadein");
    }
}

document.getElementById("about").classList.add("fadein");
document.getElementById("projects").classList.add("fadein");

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", input);
})

var count = 0;
document.getElementById("special").addEventListener("click", function () {
    count++;
    console.log(count);
    if (count % 3 === 0)
    {
        document.documentElement.classList.remove("night");
        document.documentElement.classList.add("morning");
        document.getElementById("about-description").style.color = "#000000";
        document.getElementById("proj-description").style.color = "#000000";
    }
    if (count % 3 === 1)
    {
        document.documentElement.classList.remove("morning");
        document.documentElement.classList.add("evening");
        document.getElementById("about-description").style.color = "#f9f9f9";
        document.getElementById("proj-description").style.color = "#f9f9f9";
    }
    if (count % 3 === 2)
    {
        document.documentElement.classList.remove("evening");
        document.documentElement.classList.add("night");
    }
})

var invisible = 0;

const letters = document.querySelectorAll(".letter");
letters.forEach(letter => {
    letter.addEventListener("click", function () {
        if (letter.style.color != "transparent")
        {
            letter.style.color = "transparent";
            invisible++;
        }
        if (invisible === 10)
        {
            document.getElementById("warning").innerHTML = "don't do it";
        }
        if (invisible === 11)
        {
            document.getElementById("warning").innerHTML = "last chance";
        }
        if (invisible === 12)
        {
            document.getElementById("warning").innerHTML = "";
            document.documentElement.classList.remove(["morning", "evening", "night"]);
            document.documentElement.classList.add("nice");
        }
    })
})