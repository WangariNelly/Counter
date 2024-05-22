let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

document.body.style.backgroundColor = "lightgray";
//looping the btns
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const buttonType = e.currentTarget.classList;
    if (buttonType.contains("increase")) {
      count++;
    } else if (buttonType.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
