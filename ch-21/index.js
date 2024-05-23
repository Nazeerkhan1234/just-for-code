let regForm = document.querySelector(".reg-form");
let regList = document.querySelector(".reg-list");
let allInput = regForm.querySelectorAll("input");
let allBtn = regForm.querySelectorAll("button");
let texarea = document.querySelector("textarea");
let searchEle = document.querySelector(".search");
let allUserData = [];
if (localStorage.getItem("allUser") != null) {
  let str = localStorage.getItem("allUser");
  allUserData = JSON.parse(str);
}
regForm.onsubmit = (e) => {
  e.preventDefault();
  let user = {
    name: allInput[0].value,
    email: allInput[1].value,
    password: allInput[2].value,
    fathername: allInput[3].value,
    address: texarea.value,
  };
  if (
    allInput[0].value != "" &&
    allInput[1].value != "" &&
    allInput[2].value != "" &&
    allInput[3].value != "" &&
    texarea.value != ""
  ) {
    let checkEmail = allUserData.find(
      (data) => data.email == allInput[1].value
    );
    if (checkEmail == undefined) {
      allUserData.push(user);
      let str = JSON.stringify(allUserData);
      localStorage.setItem("allUser", str);
      Swal.fire("Good Job! ", "Data Register Successfully", "success");
      showData();
      regForm.reset("");
    } else {
      Swal.fire("Duplicate Email", "All ready Exist", "warning");
    }
  } else {
    Swal.fire("Empty Field ", "Fill all the fields", "warning");
  }
};

const showData = () => {
  regList.innerHTML = "";
  allUserData.forEach((item, index) => {
    regList.innerHTML += `<tr>
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.password}</td>
    <td>${item.fathername}</td>
    <td>${item.address}</td>
    <td>
      <button class="btn edit-btn p-1 px-2 btn-success">
        <i class="fa-solid fa-edit"></i>
      </button>
      <button class="btn del-btn p-1 px-2 dl-btn btn-danger">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  </tr>`;
  });
  let allDelBtn = regList.querySelectorAll(".del-btn");
  allDelBtn.forEach((ele, idx) => {
    ele.onclick = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          allUserData.splice(idx, 1);
          localStorage.setItem("allUser", JSON.stringify(allUserData));
          showData();
          Swal.fire({
            title: "Deleted!",
            text: "Your data has been deleted.",
            icon: "success",
          });
        }
      });
    };
  });
  let allEditBtn = regList.querySelectorAll(".edit-btn");
  allEditBtn.forEach((ele, idx) => {
    ele.onclick = () => {
      let tr = ele.parentElement.parentElement;
      let allTd = tr.querySelectorAll("td");
      for (let i = 1; i < allTd.length - 2; i++) {
        allInput[i - 1].value = allTd[i].innerText;
      }
      texarea.value = allTd[5].innerText;
      allBtn[0].classList.add("d-none");
      allBtn[1].classList.remove("d-none");
      allBtn[1].onclick = () => {
        let updateData = {
          name: allInput[0].value,
          email: allInput[1].value,
          password: allInput[2].value,
          fathername: allInput[3].value,
          address: texarea.value,
        };
        allUserData[idx] = updateData;
        localStorage.setItem("allUser", JSON.stringify(allUserData));
        showData();
        allBtn[0].classList.remove("d-none");
        allBtn[1].classList.add("d-none");
        regForm.reset("");
      };

      //---------- or---------
      // for (let i = 1; i < allTd.length - 1; i++) {
      //   allTd[i].contentEditable = true;
      //   allTd[i].style.border = "2px solid red";
      // }
      // let btnTd = allTd[allTd.length - 1];
      // let saveBtn = btnTd.querySelector("button");
      // saveBtn.innerHTML = "<i class='fa fa-save'></i>";
      // saveBtn.onclick = () => {
      //   let obj = {
      //     name: allTd[1].innerText.trim(),
      //     email: allTd[2].innerText.trim(),
      //     password: allTd[3].innerText.trim(),
      //     fathername: allTd[4].innerText.trim(),
      //     address: allTd[5].innerText.trim(),
      //   };
      //   allUserData[idx] = obj;
      //   localStorage.setItem("allUser", JSON.stringify(allUserData));
      //   showData();
      // };
    };
  });
};
showData();

searchEle.oninput = () => {
  search();
};
const search = () => {
  let value = searchEle.value.toLowerCase();
  let allTr = regList.querySelectorAll("tr");
  for (let i = 0; i < allTr.length; i++) {
    let allTd = allTr[i].querySelectorAll("td");
    let name = allTd[1].innerText.toLocaleLowerCase();
    let email = allTd[2].innerText.toLocaleLowerCase();
    let password = allTd[3].innerText.toLocaleLowerCase();
    let fathername = allTd[4].innerText.toLocaleLowerCase();
    let address = allTd[5].innerText.toLocaleLowerCase();
    if (name.indexOf(value) != -1) {
      allTr[i].classList.remove("d-none");
    } else if (email.indexOf(value) != -1) {
      allTr[i].classList.remove("d-none");
    } else if (password.indexOf(value) != -1) {
      allTr[i].classList.remove("d-none");
    } else if (fathername.indexOf(value) != -1) {
      allTr[i].classList.remove("d-none");
    } else if (address.indexOf(value) != -1) {
      allTr[i].classList.remove("d-none");
    } else {
      allTr[i].classList.add("d-none");
    }
  }
};
