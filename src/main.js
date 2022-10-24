import { metersToFeet, feetToMeters, litersToGallons, gallonsToLiter, kilogramsToPounds, poundsToKilograms } from './unit-conversion.js';
//upperside elements
const convertBtn = document.querySelector('#convert-btn');
const convertInput = document.querySelector('#convert-input');
const InputValueSpan = document.querySelectorAll('#input-value-span');
//span elements
const metersToFeetSpan = document.querySelector('#meters-to-feet-span');
const feetToMetersSpan = document.querySelector('#feet-to-meters-span');
const litersToGallonsSpan = document.querySelector('#liters-to-gallons-span');
const gallonsToLitersSpan = document.querySelector('#gallons-to-liter-span');
const poundsToKilogramsSpan = document.querySelector('#pounds-to-kilograms-span');
const kilogramsToPoundsSpan = document.querySelector('#kilograms-to-pounds-span');
//lower div
const lowerSideDiv = document.querySelector('#lower-side-div');
convertBtn.onclick = () => {
    if (lowerSideDiv.classList.contains('hidden')) {
        lowerSideDiv.classList.remove('hidden');
        lowerSideDiv.classList.add('flex');
    }
    InputValueSpan.forEach((span) => span.textContent = convertInput.value);
    const unitValue = parseInt(convertInput.value);
    metersToFeetSpan.textContent = metersToFeet(unitValue);
    feetToMetersSpan.textContent = feetToMeters(unitValue);
    gallonsToLitersSpan.textContent = gallonsToLiter(unitValue);
    litersToGallonsSpan.textContent = litersToGallons(unitValue);
    kilogramsToPoundsSpan.textContent = kilogramsToPounds(unitValue);
    poundsToKilogramsSpan.textContent = poundsToKilograms(unitValue);
};
