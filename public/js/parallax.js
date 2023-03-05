



window.addEventListener("load", event => {
    document.addEventListener("mousemove", parallax)
});

const leftPanel = document.getElementById("left_panel")
const leftPanelInfo = {
    "left": leftPanel.offsetLeft,
    "width": leftPanel.offsetWidth
}
const rightPanel = document.getElementById("right_panel")
const rightPanelInfo = {
    "left": rightPanel.offsetLeft,
    "width": rightPanel.offsetWidth
}

function parallax(event) {
    // console.log(event)
    // console.log(leftPanel)
    // console.log(rightPanel)

    const offset = 1 // in case we might use a weight/friction later (inside a forEach)
    const leftMidPointX = leftPanelInfo.left + leftPanelInfo.width/2
    const rightMidPointX = rightPanelInfo.left + rightPanelInfo.width/2

    const leftTranslatePosX = ((event.pageX + leftMidPointX - window.innerWidth/2) * offset) / 100;
    const rightTranslatePosX = ((event.pageX - rightMidPointX) * offset) / 100;
    const translatePosY = ((event.pageY - window.innerHeight/2) * offset) / 100;

    leftPanel.style.transform = `translate(${leftTranslatePosX}px, ${translatePosY}px) rotateY(${leftTranslatePosX*0.75}deg) rotateX(${translatePosY*1.5*(-1)}deg)`
    rightPanel.style.transform = `translate(${rightTranslatePosX}px, ${translatePosY}px) rotateY(${rightTranslatePosX*0.75}deg) rotateX(${translatePosY*1.5*(-1)}deg)`
    // console.log(rightMidPointX);
    // console.log(leftMidPointX);
    // console.log(window.innerWidth/2);
}