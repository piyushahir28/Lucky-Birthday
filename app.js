var birthDate = document.querySelector(".date-input");
var luckyNumber = document.querySelector(".luckyNumber");
var check = document.querySelector(".check-btn");
var privacy = document.querySelector(".cross-btn")
var privacyNotice = document.querySelector(".alertBox");
var smallOpt = document.querySelector("#sm-opt");
var smallOptDiv = document.querySelector(".output")
var imgSad = document.querySelector("#img-sad");
var imgHappy = document.querySelector("#img-happy");
var imgCake = document.querySelector("#img-cake");

function hidePrivacyPolicy() {
    privacyNotice.style.display = "none"
}

function heIsLucky() {}

function heIsNotLucky() {}

function calSum(dob) {}

function clickHandler() {}


privacy.addEventListener("click", hidePrivacyPolicy);
check.addEventListener("click", clickHandler);