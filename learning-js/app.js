const trailer = document.getElementById("trailer");

window.onmousemove = e => {
    const cursorWidth = trailer.offsetWidth;
    const cursorHeight = trailer.offsetHeight;
    const x = e.clientX;
    const y = e.clientY;
    const interactable = e.target.closest(".interactable");
    const interacting = interactable !== null;

    trailer.style.left = `${x - cursorWidth / 2}px`;
    trailer.style.top = `${y - cursorHeight / 2}px`;

    changeScale(interacting);
}

const changeScale = (interacting) => {

    const keyframes = {
        transform: `scale(${interacting ? 2 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}

