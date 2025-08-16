let statusY = document.querySelector("h5");

let addF = document.querySelector("#add");

let flag = 0;

addF.addEventListener("click", function () {
  if (flag == 0) {
    statusY.innerHTML = "Friends";
    statusY.style.color = "green";
    addF.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    statusY.innerHTML = "Stranger";
    statusY.style.color = "red";
    addF.innerHTML = "Add Friend";
    flag = 0;
  }
});
