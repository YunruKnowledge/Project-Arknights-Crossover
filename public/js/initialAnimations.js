



window.addEventListener("load", event => {
    // this call should be replaced with something else, after loading screen is done.
    AnimationsInit()
});

function AnimationsInit() {

    // set animation for character title/name
    const characterName = document.getElementById("characterName")
    const characterNameTarget = characterName.children[0]
    if (characterNameTarget.tagName === "IMG") return
    // console.log(characterNameTarget.previousSibling)
    characterNameTarget.style.setProperty("--nameAniSet","name_line_ani 2s 1 ease-in-out")

}