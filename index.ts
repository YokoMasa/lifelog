window.addEventListener("load", () => {
    const pointerEl = document.getElementById("summary-pointer") as HTMLDivElement;
    document.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            pointerEl.style.opacity = "1";
        } else {
            pointerEl.style.opacity = "0";
        }
    })
});