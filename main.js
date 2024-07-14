let sliderImgae = Array.from(document.querySelectorAll(".contaier-slider img"));
let sliderNumberElement = document.getElementById("slider-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("porv");
let indicators = document.getElementById("indicators");
let sliderCount = sliderImgae.length;
let currentSlider = 1;

let ulElement = document.createElement("ul");
ulElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= sliderCount; i++) {
  let liELement = document.createElement("li");
  liELement.setAttribute("data-index", i);
  liELement.appendChild(document.createTextNode(i));
  ulElement.appendChild(liELement);
}

indicators.appendChild(ulElement);

let lis = document.querySelectorAll("#pagination-ul li");

theChecker();

prevButton.onclick = previous;

nextButton.onclick = next;

function previous() {
  if (prevButton.classList.contains("disabled")) {
    return 0;
  } else {
    currentSlider--;
    theChecker();
  }
}

function next() {
  if (nextButton.classList.contains("disabled")) {
    return 0;
  } else {
    currentSlider++;
    theChecker();
  }
}

function theChecker() {
  sliderNumberElement.innerHTML =
     currentSlider +  "/"  + sliderCount;
  removeAllActive();
  sliderImgae[currentSlider - 1].classList.add("active");
  lis[currentSlider - 1].classList.add("active");

  if (currentSlider == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlider == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlider === sliderCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImgae.forEach((img) => {
    img.classList.remove("active");
  });

  lis.forEach((li) => {
    li.classList.remove("active");
  });
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.target.dataset.index);
 
    currentSlider = e.target.dataset.index;
    theChecker()
  });
});
