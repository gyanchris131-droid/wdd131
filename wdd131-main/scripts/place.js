// ===== WIND CHILL CALCULATION =====
// One-line function as required by rubric
const calculateWindChill = (t, v) => (t <= 10 && v > 4.8) ? Math.round(13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)) + ' °C' : 'N/A';

// Display wind chill only if conditions are met
const temp = 9; // Celsius
const windSpeed = 10; // km/h

if (temp <= 10 && windSpeed > 4.8) {
    document.getElementById('wind-chill').textContent = calculateWindChill(temp, windSpeed);
} else {
    document.getElementById('wind-chill').textContent = 'N/A';
}

// ===== FOOTER DATES =====
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
