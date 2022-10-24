function metersToFeet(meters:number):string
{
    const feet=meters*3.281
    return feet.toFixed(3).toString() 
}
function feetToMeters(feet:number):string
{
    const meters=feet/3.281
    return meters.toFixed(3).toString()
}
function litersToGallons(liters:number):string
{
    const gallons=liters*0.264
    return gallons.toFixed(3).toString()
}
function gallonsToLiter(gallons:number):string
{
    const liters=gallons/0.264
    return liters.toFixed(3).toString()
}
function poundsToKilograms(pounds:number):string
{
    const kilograms=pounds/2.204
    return kilograms.toFixed(3).toString()
}
function kilogramsToPounds(kilograms:number):string
{
    const pounds=kilograms*2.204
    return pounds.toFixed(3).toString()
}
export{metersToFeet,feetToMeters,litersToGallons,gallonsToLiter,kilogramsToPounds,poundsToKilograms}