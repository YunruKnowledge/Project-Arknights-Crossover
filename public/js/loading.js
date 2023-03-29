



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
    loadingIcon.style.opacity = "1"
};  
window.addEventListener("beforeunload", beforeUnload);