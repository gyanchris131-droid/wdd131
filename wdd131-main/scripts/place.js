document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

const temp = parseFloat(document.getElementById('temp').textContent);
const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

if (temp <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('wind-chill').textContent = windChill.toFixed(1) + "\u00B0C";
} else {
    document.getElementById('wind-chill').textContent = "N/A";
}