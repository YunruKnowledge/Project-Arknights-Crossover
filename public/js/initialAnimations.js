



window.addEventListener("load", event => {
    // this call should be replaced with something else, after loading screen is done.
    AnimationsInit()
});

function AnimationsInit() {

    // set animation for character title/name
    const characterName = document.getElementById("characterName")
    const characterNameTarget = characterName.children[0]
    if (characterNameTarget.tagName === "SPAN") {
        // console.log(characterNameTarget.previousSibling)
        characterNameTarget.style.setProperty("--nameAniSet","name_line_ani 2s 1 ease-in-out")
    }

    
    // Set animation for text (attribute: textWriteAni)
    const elements = document.querySelectorAll("[textWriteAni]")
    elements.forEach((targetElement, index)=>{
        const text = targetElement.textContent
        printLetterByLetter(targetElement, text, 8+2*index);
    })

    function printLetterByLetter(target, content, speed){
        let i = 0;
        target.style.height = `${getComputedStyle(target).getPropertyValue("height")}`
        // console.log(getComputedStyle(target).getPropertyValue("height"), "height");
        target.innerHTML = ""

        const interval = setInterval(()=>{
            target.innerHTML += content.charAt(i);
            i++;
            if (i > content.length){
                target.style.height = ""
                clearInterval(interval);
            }
        }, speed);
    }
}