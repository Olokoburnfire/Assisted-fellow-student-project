const prevBtns = document.querySelectorAll(".back");
const nextBtns = document.querySelectorAll(".next");
const progress = document.querySelectorAll(".progress");
const formStem = document.querySelectorAll(".form-stem");
const progressSteps = document.querySelectorAll(".progress-step");



let formStemNum = 0;

// For nextt button

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStemNum++;
    updateFormStem();
    updateProgressBar();
  });
});

// For previous button
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStemNum--;
    updateFormStem();
  });
});


function updateFormStem() {

  formStem.forEach(formStem => {
    formStem.classList.contains("form-step-active") && formStem.classList.remove("form-step-active");
  });

  formStem[formStemNum].classList.add("form-step-active");
}


function updateProgressBar() {
progressSteps.forEach((progressSteps, idx) => {
  if (idx < formStemNum + 1) {
    progressSteps.classList.add("progress-step-active");
  }else{
     progressSteps.classList.remove("progress-step-active");
  }
});
  const progressActive = document.querySelectorAll("rogress-step-active");


  progress.style.border = "2px solid #1976D3";
}



// phone number selector
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true,
});

// language selector
(function () {
  var language_select = document.getElementById("languages");
  var result = document.getElementById("selected-language");

  language_select.addEventListener("change", function (event) {
    var selected_value = this.value;
    var selected_text = this.options[this.selectedIndex].text;
    result.innerText = selected_value + "\n" + selected_text;
  });
})();

