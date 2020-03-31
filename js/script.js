var rangeSlider = document.getElementById("city");
var rangeSliderLong = document.getElementById("long-distance");
var rangeBullet = document.getElementById("rs-bullet");
var rangeBulletLong = document.getElementById("rs-bullet-long");

rangeSlider.addEventListener("input", showSliderValue, false);
rangeSliderLong.addEventListener("input", showSliderLongValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}

function showSliderLongValue() {
    rangeBullet.innerHTML = rangeSliderLong.value;
    var bulletPosition = (rangeSliderLong.value /rangeSliderLong.max);
    rangeBullet.style.left = (bulletPosition * 578) + "px";
  }