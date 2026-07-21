/* ==========================================
   Temple Album JavaScript
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Hamburger Menu Toggle
    const menuToggle = document.querySelector("#menu-toggle");
    const mainNav = document.querySelector("#main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");
            menuToggle.classList.toggle("open");
        });
    }

    // 2. Footer - Current Year
    const currentYearSpan = document.querySelector("#currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 3. Footer - Last Modified Date
    const lastModifiedPara = document.querySelector("#lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = "Last Modification: " + document.lastModified;
    }
});