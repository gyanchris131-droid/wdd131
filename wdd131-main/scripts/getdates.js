/* ==========================================
   Dynamic Date Script for WDD 131
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Get the current year and display it in the span
    const currentYearSpan = document.querySelector("#currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Get the document's last modified date and display it
    const lastModifiedPara = document.querySelector("#lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = "Last Modification: " + document.lastModified;
    }
});