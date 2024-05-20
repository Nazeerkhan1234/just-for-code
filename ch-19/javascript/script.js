let btn = document.querySelectorAll("button");
let h3 = document.querySelectorAll("h3");
let data = ["name", "roll", "close", "open", "danger"];
let data2 = ["salman", "sharukh"];
let data3 = data.concat(data2);
isShowingBefore = true;
btn[0].onclick = () => {
  let result = data.toString();
  if (isShowingBefore) {
    h3[0].innerHTML =
      "Array before converting into string>>>  " + "[" + data + "]";
    h3[1].innerHTML = "Array after converting into string>>>   " + result;
  } else {
    h3[0].innerHTML = "";
    h3[1].innerHTML = "";
  }
  isShowingBefore = !isShowingBefore;
};
btn[1].onclick = () => {
  if (isShowingBefore) {
    h3[2].innerHTML = "Array before Deleted the element  " + "[" + data + "]";
    data.pop();
    h3[3].innerHTML = "Array after Deleted the element  " + "[" + data + "]";
  } else {
    h3[2].innerHTML = "";
    h3[3].innerHTML = "";
  }
  isShowingBefore = !isShowingBefore;
};
btn[2].onclick = () => {
  if (isShowingBefore) {
    h3[4].innerHTML = "Array before Deleted the element  " + "[" + data + "]";
    data.shift();
    h3[5].innerHTML = "Array after Deleted the element  " + "[" + data + "]";
  } else {
    h3[4].innerHTML = "";
    h3[5].innerHTML = "";
  }
  isShowingBefore = !isShowingBefore;
};
btn[3].onclick = () => {
  if (isShowingBefore) {
    h3[6].innerHTML = "Array before inserted last element  " + "[" + data + "]";
    data.push("khan");
    h3[7].innerHTML = "Array after inserted last element  " + "[" + data + "]";
  } else {
    h3[6].innerHTML = "";
    h3[7].innerHTML = "";
  }
  isShowingBefore = !isShowingBefore;
};
btn[4].onclick = () => {
  if (isShowingBefore) {
    h3[8].innerHTML =
      "Array before inserted first element  " + "[" + data + "]";
    data.unshift("Nazeer");
    h3[9].innerHTML = "Array after inserted first element  " + "[" + data + "]";
  } else {
    h3[8].innerHTML = "";
    h3[9].innerHTML = "";
  }
  isShowingBefore = !isShowingBefore;
};
btn[5].onclick = () => {
  if (isShowingBefore) {
    h3[10].innerHTML = "Array before cancenate an array  " + "[" + data + "]";
    h3[11].innerHTML = "Array after cancenate an array  " + "[" + data3 + "]";
  } else {
    h3[10].innerHTML = "";
    h3[11].innerHTML = "";
  }
  isShowingBefore = !isShowingBefore;
};
