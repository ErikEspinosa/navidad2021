window.onload = () => {
    const preload = document.querySelector(".preload")
    preload.style.display = "none"
}

const button = document.querySelector(".button")
button.addEventListener("click", () => {
    window.location.href = "https://erikespinosar.com"
})