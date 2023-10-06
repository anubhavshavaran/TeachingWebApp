// Onboarding Pages Scripts
const onboarding1 = document.querySelector("#onboarding-1-btn");
const onboarding2 = document.querySelector("#onboarding-2-btn");

onboarding1.addEventListener("click", () => {
    window.location.href = "onboarding2.html";
});
onboarding2.addEventListener("click", () => {
    window.location.href = "onboarding3.html";
});