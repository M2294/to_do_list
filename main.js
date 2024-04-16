const contianer = document.getElementById("contianer");
const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const list = document.getElementById("list");

contianer.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "delete fas fa-trash-alt":
      eo.target.parentElement.parentElement.remove();
      break;

    case "mark fas fas fa-check":
      eo.target.classList.add("done");
      const comp = ` <button class="comp fas fa-check-double ">  </button>`;
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");
      eo.target.parentElement.innerHTML += comp;
      break;

    case "comp fas fa-check-double ":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

      eo.target.classList.add("done");

      const mark = `
      <button class="mark fas fas fa-check"></button>
`;

      eo.target.parentElement.innerHTML += mark;
      break;

    case "up fas fa-angle-up":
      list.prepend(eo.target.parentElement.parentElement);
      break;

    case "down fas fa-angle-down":
      list.append(eo.target.parentElement.parentElement);
      break;

    case "edit fas fa-pencil-alt":
      const edit = eo.target.parentElement.parentElement;

      const inputText = edit.querySelector(".name input[type=text]");
      const saveInfo = edit.querySelector(".name .saveInfo");
      saveInfo.style.display = "block";
      inputText.readOnly = false;

      //save by press enter btn
      inputText.addEventListener("keypress", function (eo) {
        var key = eo.keyCode;
        if (key === 13) {
          // 13 is enter
          inputText.readOnly = true;
          saveInfo.style.display = "none";
        }
      });
      break;
  }
});

//Add new item
const formAdd = document.forms["form-add"];
formAdd.addEventListener("submit", (eo) => {
  eo.preventDefault();
let insertedData;
  if (insertedData = input.value){

    let insertedData = formAdd.querySelector("input[type=text]").value;
    insertedData = `<li>
           <span class="name">
               <input type="text"  class="task-text" value="${insertedData}" readonly="readonly"> 
               <p class="saveInfo">Press "Enter" to save</p>
           </span>
           <span class="action">
               <button class="up fas fa-angle-up"></button>
               <button class="down fas fa-angle-down"></button>
               <button class="edit fas fa-pencil-alt"></button>
               <button class="delete fas fa-trash-alt"></button>
               <button class="mark fas fas fa-check"></button>
            </span>
           </li>`;
    list.insertAdjacentHTML("afterbegin", insertedData);
    formAdd.querySelector("input[type=text]").value = "";
    document.getElementById("hide").style.display = "none";
  }
  else{
    document.getElementById("hide").style.display = "block";
  }
});





/*
let input2 = document.getElementById("input");

  input2.value= localStorage.getItem('done')

input2.onkeyup= function(){
    localStorage.setItem('done' , input2.value)
}
*/