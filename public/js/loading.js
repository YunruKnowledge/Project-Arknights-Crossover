



window.addEventListener("load", event => {
    loadingDone()
});

const content = document.querySelectorAll("[loadHide]")
content.forEach(e=>{
    e.style.opacity = "0"
    e.style.transform = "translateY(64px)"
    // e.style.transition = "200ms"
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
};  
window.addEventListener("beforeunload", beforeUnload);