



window.addEventListener("load", event => {
    loadingDone()
});

const loadingIcon = document.createElement("img")
loadingIcon.src = `data:image/png;base64,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`
loadingIcon.style.width = "64px"
loadingIcon.style.height = "64px"
loadingIcon.style.transform = "skewX(100%)"
loadingIcon.style.animation = "loadSpin 1s infinite linear"
loadingIcon.style.position = "absolute"
loadingIcon.style.zIndex = "0"
loadingIcon.style.top = "50%"
loadingIcon.style.left = "50%"
loadingIcon.style.translate = "-50% -50%"
loadingIcon.style.opacity = "0"
loadingIcon.style.display = "none"
loadingIcon.style.transition = "80ms"

const content = document.querySelectorAll("[loadHide]")
content.forEach(e=>{
    e.style.opacity = "0"
    e.style.transform = "translateY(64px)"
    // e.style.transition = "200ms"
    
    const body = document.querySelector("body")
    body.insertBefore(loadingIcon, body.children[2]);
    console.log(body.children[2])
})

function loadingDone() {
    content.forEach(e=>{
        e.style.transition = "600ms cubic-bezier(0.25, 1, 0.5, 1)"
        e.style.opacity = ""
        e.style.transform = "translateY(0px)"
        setTimeout(() => {
            e.style.transition = ""
        }, 600);
    })
}

const beforeUnload = (event) => {
    console.log(event);
    const content = document.querySelectorAll("[loadHide]")
    content.forEach(e=>{
        e.style.transition = "200ms"
        e.style.opacity = "0"
        setTimeout(() => {
            e.remove()
        }, 200);
    })
    loadingIcon.style.display = "block"
    loadingIcon.style.opacity = "1"
};  
window.addEventListener("beforeunload", beforeUnload);