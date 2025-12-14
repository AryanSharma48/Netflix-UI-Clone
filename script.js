const getStarted = document.getElementById("get-started-btn");
const input = document.getElementById("email-input-element")

getStarted.addEventListener("click",() => {
    input.focus();
});