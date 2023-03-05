



window.addEventListener("load", event => {
    const container = document.getElementById("right_panel");
    const skill_container = container.children[1]

    const targets = skill_container.children
    Array.from(targets).forEach(element => {
        console.log(element.getAttribute("id"))
        // if element not have an ID
        if (element.getAttribute("id")) return
        Array.from(element.children).forEach(targetElement => {
            targetElement.addEventListener("mouseover", mouseEvent => moveSkillSelector(mouseEvent, targetElement))
            console.log(targetElement)
        })
    });
    console.log(targets)
});

function moveSkillSelector(mouseEvent, element) {
    console.log(mouseEvent.target);
    console.log(element.offsetTop);
    
    const selector = document.getElementById("skill_selector")
    selector.style.transform = `translateY(${element.offsetTop-selector.offsetTop}px)`
    selector.style.height = `${element.offsetHeight}px`
    selector.style.left = `-${element.children[0].offsetWidth/4}px`
    console.log(selector.offsetTop);
}