// Forgot Password Page Script
const continueBtn = document.querySelector("#continue-btn");
const title = document.querySelector("#input-field-title");
const titles = ["Email", "Code", "New Password"];
var count = 0;

continueBtn.addEventListener("click", function () {
    if (count < 3) {
        if (count == 2) {
            console.log("Password Changed");
            window.location.href = "onboarding1.html";
        } else if (count == 1) {
            document.querySelectorAll(".input-field")[1].style.display = "flex";
        }
        count++;
        title.innerText = titles[count];
    }
    else {
        count = 0;
    }
});