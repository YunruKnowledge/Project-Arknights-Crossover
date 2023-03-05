



function gallerySlide(value, call = false) {
    const container = document.getElementById("gallery_icon");
    const gapAmount = getComputedStyle(container).getPropertyValue("gap")
    
    const childrenStyle = getComputedStyle(container.children[0])
    const currentMargin = childrenStyle.getPropertyValue("margin-left")
    const currentWidth = childrenStyle.getPropertyValue("width")
    
    const ScrollErrorMargin = parseFloat(currentWidth)/2
    const maxScroll = ((parseFloat(currentWidth) +parseFloat(gapAmount)) *(container.children.length -4) +ScrollErrorMargin) *-1
    const minScroll = 0 +ScrollErrorMargin
    const nextScroll = {
        "backward": parseFloat(currentMargin) +parseFloat(currentWidth) +parseFloat(gapAmount),
        "forward": parseFloat(currentMargin) -parseFloat(currentWidth) -parseFloat(gapAmount)
    }
    const futureScroll = {
        "backward": nextScroll.backward +parseFloat(currentWidth) +parseFloat(gapAmount),
        "forward": nextScroll.forward -parseFloat(currentWidth) -parseFloat(gapAmount)
    }

    if (call) return [{ "max": maxScroll, "min": minScroll}, nextScroll, futureScroll]

    btnAvailabilityUpdate(value)
    if (!!value)
    if (value == 1 && nextScroll.forward > maxScroll) {
        container.children[0].style.marginLeft = `${nextScroll.forward}px`
    }
    else if (value == -1 && nextScroll.backward < minScroll) {
        container.children[0].style.marginLeft = `${nextScroll.backward}px`
    }
    else {
        // console.log("");
        // console.log("---NEW - DENIED");
        // console.log(maxScroll);
        // console.log(nextScroll.forward);
        // console.log("");
        // console.log(minScroll);
        // console.log(nextScroll.back);
        return
    }
    // console.log("");
    // console.log("---NEW - SUCCESS");
    // console.log(maxScroll);
    // console.log(nextScroll.forward);
    // console.log("");
    // console.log(minScroll);
    // console.log(nextScroll.back);

}

function btnAvailabilityUpdate(sildeDirection) {
    if (!sildeDirection) return

    const container = document.getElementById("gallery_icon");
    const button = container.parentElement.children
    const gallerySlideValues = gallerySlide(null, true)

    Array.from(button).forEach(element => {
        if (!element) return
        if (element.tagName != "BUTTON") return

        if (element.getAttribute("id") === "forward") {
            // If said button is not usable.
            if (sildeDirection == 1 && gallerySlideValues[2].forward < gallerySlideValues[0].max) {
                element.style.opacity = "0.33"
                element.style.cursor = "default"
            }
            else {
                element.style.opacity = "1"
                element.style.cursor = "pointer"
            }
        }
        else if (element.getAttribute("id") === "backward") {
            if (sildeDirection == -1 && gallerySlideValues[2].backward > gallerySlideValues[0].min) {
                element.style.opacity = "0.33"
                element.style.cursor = "default"
            }
            else {
                element.style.opacity = "1"
                element.style.cursor = "pointer"
            }
        }
        else { return }
    });
}

window.addEventListener("load", event => {
    const container = document.getElementById("gallery_icon");
    const childrenStyles = getComputedStyle(container.children[0])
    const gapAmount = getComputedStyle(container).getPropertyValue("gap")
    const maxScroll = container.children.length
    
    // Resizing the container into fitting only 4 icons
    const containerWidth = container.children[0].clientWidth * 4 + parseFloat(gapAmount) * 3
    container.style.width = `${containerWidth}px`;
    container.style.overflow = "hidden"
    console.log(maxScroll)

    btnAvailabilityUpdate(-1)
});

