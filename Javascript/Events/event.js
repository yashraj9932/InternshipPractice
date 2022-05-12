// Function to modify the text content of the paragraph
const changeText = () => {
  const p = document.querySelector("p");
  p.textContent =
    "I was changed with an inline event handler by clicking on para!";
};
const changeTextP = () => {
  const p = document.querySelector("p");
  p.textContent =
    "I was changed with an inline event handler by clicking on button!";
};
document.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) console.log("Enter key is pressed");
});
