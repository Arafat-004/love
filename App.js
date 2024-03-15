const btn = document.getElementById("btn");
const secretMessage = document.getElementById("secretMessage");

const msg = "I Love You ❤❤";
btn.addEventListener("click", (e) => {
  secretMessage.textContent = msg;
});
