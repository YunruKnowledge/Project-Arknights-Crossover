



window.addEventListener("load", event => {
    InitSkillSelector()
    InitCharacterIconSelector()
});

function InitSkillSelector() {
    const container = document.getElementById("right_panel");
    const skill_container = container.children[1]
    const targets = skill_container.children

    Array.from(targets).forEach(element => {
        if (element.getAttribute("id")) return // exclude ID (#characterName)
        Array.from(element.children).forEach(targetElement => {
            targetElement.addEventListener("mouseover", mouseEvent => moveSkillSelector(mouseEvent, targetElement))
        })
    });
}

function moveSkillSelector(mouseEvent, element) {
    const selector = document.getElementById("skill_selector")
    selector.style.transform = `translateY(${element.offsetTop-selector.offsetTop}px)`
    selector.style.height = `${element.offsetHeight}px`
    selector.style.left = `-${element.children[0].offsetWidth/4}px`
}

function InitCharacterIconSelector() {
    const urlPathSections = window.location.pathname.split("/")
    const urlPathTarget = urlPathSections[urlPathSections.length-1]
    // console.log(urlPathTarget);

    const elements = document.getElementById("gallery_icon").children
    Array.from(elements).forEach((anchor,index)=>{
        const anchorPathSections = anchor.href.split("/")
        const anchorPathTarget = anchorPathSections[anchorPathSections.length-1]
        // console.log(anchorPathTarget);
        
        // console.log(anchor, index);
        if (anchorPathTarget === urlPathTarget) {
            anchor.classList.add("gallery_active")
            for (let i = 0; i <= index; i++) {
                if (i > 0 ) {
                    setTimeout(() => {
                        gallerySlide(1)
                        // console.log(i, index);
                    }, i*400);
                }
            }
        }
        else return
    })
    
}