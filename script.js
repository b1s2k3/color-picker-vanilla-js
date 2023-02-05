const mainPart = document.getElementById("container");
const colorButtons = document.getElementById("color-buttons");

//Color List

const colors = [
  "#ff0000",
  "#00ff00",
  "#0000cc",
  "#ffff00",
  "#9900cc",
  "#ff9500",
  "#ff6699",
  "#66ffd9",
  "#b0b0ab",
];

// Creating Collor Picker Buttons

const buttonsFragment = document.createDocumentFragment();

for (let x in colors) {
  const singleBtn = document.createElement("button");
  singleBtn.classList.add("single-button");
  singleBtn.style.backgroundColor = colors[x];
  buttonsFragment.appendChild(singleBtn);

  singleBtn.addEventListener("click", pickColor);
}

colorButtons.appendChild(buttonsFragment);

// Creating Showcase

const showCase = document.createElement("div");
showCase.setAttribute("id", "showcase");
showCase.style.backgroundColor = "#fff";
showCase.innerHTML =
  "<h3 style='text-align:center; margin-top:25px' >Select a Color</h3>";

mainPart.insertBefore(showCase, mainPart.firstChild);

function pickColor(e) {
  const tarGet = e.target;
  const bgColor = tarGet.style.backgroundColor;
  showCase.style.backgroundColor = bgColor;
  showCase.innerHTML = "";
  showCase.style.boxShadow = `4px 5px 7px 5px ${bgColor}`;
}
