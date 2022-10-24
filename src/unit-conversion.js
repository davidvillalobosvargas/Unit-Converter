function metersToFeet(meters) {
    const feet = meters * 3.281;
    return feet.toFixed(3).toString();
}
function feetToMeters(feet) {
    const meters = feet / 3.281;
    return meters.toFixed(3).toString();
}
function litersToGallons(liters) {
    const gallons = liters * 0.264;
    return gallons.toFixed(3).toString();
}
function gallonsToLiter(gallons) {
    const liters = gallons / 0.264;
    return liters.toFixed(3).toString();
}
function poundsToKilograms(pounds) {
    const kilograms = pounds / 2.204;
    return kilograms.toFixed(3).toString();
}
function kilogramsToPounds(kilograms) {
    const pounds = kilograms * 2.204;
    return pounds.toFixed(3).toString();
}
export { metersToFeet, feetToMeters, litersToGallons, gallonsToLiter, kilogramsToPounds, poundsToKilograms };
