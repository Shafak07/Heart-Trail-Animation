const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", ()=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = xPos + "px";
    spanEl.style.height = yPos + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>
    {
        spanEl.remove();
    },3000);

});