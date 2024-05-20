let play_btn = document.getElementById("play-btn");
let p_p_btn = document.getElementById("p_p_btn");
let t_input = document.getElementById("t_input");
let img = document.querySelector("img");
let video = document.querySelector("video");
play_btn.onclick = () => {
  if (t_input.value !== "") {
    p_p_btn.className = "fa-solid fa-pause";
    let letter = t_input.value.toLowerCase();
    switch (letter) {
      case "a":
        img.src = "./images/apple.jpg";
        video.src = "./video/apple.mp4";
        break;
      case "b":
        img.src = "./images/baby.jpg";
        video.src = "./video/baby.mp4";
        break;
      case "c":
        img.src = "./images/candy.jpeg";
        video.src = "./video/candy.mp4";
        break;
      case "d":
        img.src = "./images/diamond.jpeg";
        video.src = "./video/diamond.mp4";
        break;
      case "e":
        img.src = "./images/elephant.jpg";
        video.src = "./video/elephant.mp4";
        break;
      case "f":
        img.src = "./images/fairy.jpg";
        video.src = "./video/fairy.mp4";
        break;
      case "g":
        img.src = "./images/glasses.jpeg";
        video.src = "./video/glasses.mp4";
        break;
      case "h":
        img.src = "./images/hen.jpeg";
        video.src = "./video/hen.mp4";
        break;
      case "i":
        img.src = "./images/igloo.jpeg";
        video.src = "./video/igloo.mp4";
        break;
      case "j":
        img.src = "./images/jelly.jpeg";
        video.src = "./video/jelly.mp4";
        break;
      case "k":
        img.src = "./images/keyboard.jpeg";
        video.src = "./video/keyboard.mp4";
        break;
      case "l":
        img.src = "./images/ladybug.jpeg";
        video.src = "./video/ladybug.mp4";
        break;
      case "m":
        img.src = "./images/monkey.jpeg";
        video.src = "./video/monkey.mp4";
        break;
      case "n":
        img.src = "./images/needle.jpg";
        video.src = "./video/needle.mp4";
        break;
      case "o":
        img.src = "./images/orange.jpg";
        video.src = "./video/orange.mp4";
        break;
      case "p":
        img.src = "./images/pony.webp";
        video.src = "./video/pony.mp4";
        break;
      case "q":
        img.src = "./images/queen.jpg";
        video.src = "./video/queen.mp4";
        break;
      case "r":
        img.src = "./images/rainbow.jpeg";
        video.src = "./video/rainbow.mp4";
        break;
      case "s":
        img.src = "./images/spider.jpg";
        video.src = "./video/spider.mp4";
        break;
      case "t":
        img.src = "./images/tiger.webp";
        video.src = "./video/tiger.mp4";
        break;
      case "u":
        img.src = "./images/umbrella.jpeg";
        video.src = "./video/umbrella.mp4";
        break;
      case "v":
        img.src = "./images/violen.jpeg";
        video.src = "./video/violen.mp4";
        break;
      case "w":
        img.src = "./images/wale.jpg";
        video.src = "./video/wale.mp4";
        break;
      case "x":
        img.src = "./images/xylophone.jpg";
        video.src = "./video/xylophone.mp4";
        break;
      case "y":
        img.src = "./images/yoyo.jpg";
        video.src = "./video/yoyo.mp4";
        break;
      case "z":
        img.src = "./images/zebra.jpg";
        video.src = "./video/zebra.mp4";
        break;
      default:
        return Swal.fire({
          title: "Please Enter a  Valid Letter!",
        });
    }
  } else {
    Swal.fire({
      title: "Please Enter a Letter!",
    });
  }
};
