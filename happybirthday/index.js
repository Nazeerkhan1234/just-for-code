let container = document.querySelector(".container");
let box = document.querySelector(".box");
let h2 = document.querySelector("h2");
time = 10;
let clear = setInterval(() => {
  time--;
  h2.innerText = time;
  if (time <= 5) {
    h2.style.color = "red";
    h2.style.fontSize = "60px";
    box.style.border = "30px groove red";
    container.style.border = "30px groove green";
  }
}, 1000);

setTimeout(() => {
  container.innerHTML = `
<div class="img-box animate__animated animate__slideInRight">
<h2>Happy Birthday</h2>
<img src="1.webp" alt="" srcset="" />
</div>
`;
  clearInterval(clear);
}, 11000);
