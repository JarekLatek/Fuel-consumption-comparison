const cityTrack = document.getElementById("city");
const abroadTrack = document.getElementById("abroad");
const fuel = {
  price: 4.48,
  combustion: {
    abroad: 5.5,
    city: 6.2
    },
  hybrid: {
    abroad: 8.4,
    city: 1.2
    }
  }
let prices = {
  combustion: '',
  hybrid: ''
}

let rangeSlider = document.getElementById("city");
let rangeSliderLong = document.getElementById("abroad");
let rangeBullet = document.getElementById("rs-bullet");
let rangeBulletLong = document.getElementById("rs-bullet-long");
let yourResult = document.getElementById("result");

rangeSlider.addEventListener("input", showSliderValue, false);
rangeSliderLong.addEventListener("input", showSliderLongValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  let bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 780) + "px";
  calculateFuelPrice();
}

function showSliderLongValue() {
    rangeBulletLong.innerHTML = rangeSliderLong.value;
    let bulletPosition = (rangeSliderLong.value /rangeSliderLong.max);
    rangeBulletLong.style.left = (bulletPosition * 780) + "px";
    calculateFuelPrice();
}

function calculateFuelPrice() {
  prices.combustion = (cityTrack.value / 100 * fuel.combustion.city) + (abroadTrack.value / 100 * fuel.combustion.abroad) * fuel.price;
  prices.hybrid = (cityTrack.value / 100 * fuel.hybrid.city) + (abroadTrack.value / 100 * fuel.hybrid.abroad) * fuel.price;
  if (prices.combustion > prices.hybrid) {
    yourResult.innerHTML = 'Petrol costs tell us that you should buy a hybrid.';
    // console.log('Petrol costs tell us that you should buy a hybrid.');  
  } else {
    yourResult.innerHTML = 'You are a speedracer. Petrol car is your destiny.';
    // console.log('You are a speedracer. Petrol car is your destiny.');
  }
  // console.log('Silnik spalinowy', prices.combustion, 'Silnik hybrydowy', prices.hybrid);
  // console.log('Różnica w cenie wynosi', prices.combustion - prices.hybrid);
}

