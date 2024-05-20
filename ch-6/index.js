let image = document.querySelector(".bg-img");
let bgColor=document.querySelector(".color-box");
console.log(bgColor)
let loader=document.querySelector(".loader");
let circle=document.querySelector(".circle-box");
const startImage = () => {
  image.classList.add("bgImage");
};
const stopImage = () => {
  image.classList.remove("bgImage");
};
const startColor=()=>{
  bgColor.classList.add("bgColor")
}
const stopColor=()=>{
  bgColor.classList.remove("bgColor")
}
const startLoader=()=>{
  loader.classList.add("move");
}
const stopLoader=()=>{
  loader.classList.remove("move");
}
const startZoom=()=>{
  circle.classList.add("zoom");
}
const stopZoom=()=>{
  circle.classList.remove("zoom");
}
