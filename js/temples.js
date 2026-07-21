const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Per\u00fa",
    location: "Lima, Per\u00fa",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
  },
  {
    templeName: "Cob\u00e1n Guatemala",
    location: "Cob\u00e1n, Guatemala",
    dedicated: "2020, July, 12",
    area: 7000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
  },
  {
    templeName: "Red Cliffs Utah",
    location: "St. George, Utah, United States",
    dedicated: "2024, March, 24",
    area: 96021,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-44958-main.jpg"
  }
];

function displayTemples(templeArray) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";

  templeArray.forEach(temple => {
    const figure = document.createElement("figure");
    figure.className = "temple-card";

    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    figure.appendChild(h3);

    const locationP = document.createElement("p");
    locationP.textContent = `Location: ${temple.location}`;
    figure.appendChild(locationP);

    const dedicatedP = document.createElement("p");
    dedicatedP.textContent = `Dedicated: ${temple.dedicated}`;
    figure.appendChild(dedicatedP);

    const sizeP = document.createElement("p");
    sizeP.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;
    figure.appendChild(sizeP);

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;
    figure.appendChild(img);

    container.appendChild(figure);
  });
}

function initFilters() {
  document.getElementById("home").addEventListener("click", () => displayTemples(temples));
  document.getElementById("old").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900)));
  document.getElementById("new").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000)));
  document.getElementById("large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
  document.getElementById("small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));
}

function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
    hamburger.textContent = navMenu.classList.contains("open") ? "\u2715" : "\u2630";
  });
}

displayTemples(temples);
initFilters();
initHamburger();
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
