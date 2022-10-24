import {metersToFeet,feetToMeters,litersToGallons,gallonsToLiter,kilogramsToPounds,poundsToKilograms} from './unit-conversion.js'
//upperside elements
const convertBtn=document.querySelector('#convert-btn') as HTMLButtonElement
const convertInput=document.querySelector('#convert-input') as HTMLInputElement
const InputValueSpan=document.querySelectorAll('#input-value-span') as NodeListOf<HTMLSpanElement>
//span elements
const metersToFeetSpan=document.querySelector('#meters-to-feet-span') as HTMLSpanElement
const feetToMetersSpan=document.querySelector('#feet-to-meters-span') as HTMLSpanElement
const litersToGallonsSpan=document.querySelector('#liters-to-gallons-span') as HTMLSpanElement
const gallonsToLitersSpan=document.querySelector('#gallons-to-liter-span') as HTMLSpanElement
const poundsToKilogramsSpan=document.querySelector('#pounds-to-kilograms-span') as HTMLSpanElement
const kilogramsToPoundsSpan=document.querySelector('#kilograms-to-pounds-span') as HTMLSpanElement

//lower div
const lowerSideDiv=document.querySelector('#lower-side-div') as HTMLDivElement

convertBtn.onclick=()=>{
    
    if(lowerSideDiv.classList.contains('hidden')){
        lowerSideDiv.classList.remove('hidden')
        lowerSideDiv.classList.add('flex')
    }

    InputValueSpan.forEach((span)=>span.textContent=convertInput.value)

    const unitValue=parseInt(convertInput.value)

    metersToFeetSpan.textContent=metersToFeet(unitValue)
    feetToMetersSpan.textContent=feetToMeters(unitValue)
    gallonsToLitersSpan.textContent=gallonsToLiter(unitValue)
    litersToGallonsSpan.textContent=litersToGallons(unitValue)
    kilogramsToPoundsSpan.textContent=kilogramsToPounds(unitValue)
    poundsToKilogramsSpan.textContent=poundsToKilograms(unitValue)
}
