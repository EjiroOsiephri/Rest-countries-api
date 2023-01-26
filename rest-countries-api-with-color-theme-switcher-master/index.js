const countryElem = document.querySelector(".countries");
const biMoon = document.querySelector(".bi-moon");
const region = document.querySelectorAll(".dropdown-item");
const dropdownMenu = document.querySelector(".dropdown-menu");
const hTwo = document.querySelector(".h-2");
const inputSearch = document.querySelector(".inputSearch");

const navbarText = document.querySelector(".navbar-text");
const moon = document.querySelector(".moon");

const hFive = document.querySelector(".h5");

const navbar = document.querySelector(".navbar");

const navbarBrand = document.querySelector(".navbar-brand");

async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  console.log(res);
  res.forEach((element) => {
    showCountry(element);
  });
}

function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");

  country.innerHTML = `<div class="country-img">
  <img src="${data.flags.png}" alt="" />
</div>
<div class="country-info">
  <h5 class ="countryName">${data.name.common}</h5>
  <p><strong>Population</strong>${data.population}</p>
  <p class = "regionName"><strong>Region</strong>${data.region}</p>
  <p><strong>Capital</strong>${data.capital}</p>
</div>
  `;

  countryElem.appendChild(country);
  country.addEventListener("click", () => {
    showDetail(data);
  });
}

const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");

region.forEach((element) => {
  element.addEventListener("click", () => {
    Array.from(regionName).forEach((elem) => {
      console.log(elem.innerText);
      if (elem.innerText.includes(element.innerText)) {
        elem.parentElement.parentElement.style.display = "grid";
      } else {
        elem.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

inputSearch.addEventListener("input", () => {
  console.log(inputSearch.value);
  Array.from(countryName).forEach((elem) => {
    console.log(elem.innerText);
    if (
      elem.innerText.toLowerCase().includes(inputSearch.value.toLowerCase())
    ) {
      elem.parentElement.parentElement.style.display = "grid";
    } else {
      elem.parentElement.parentElement.style.display = "none";
    }
  });
});

navbarText.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    navbarBrand.style.color = "white";
    hFive.style.color = "white";
    biMoon.style.color = "white";
    navbar.style.backgroundColor = "hsl(207, 26%, 17%)";
    countryModal.style.backgroundColor = "hsl(207, 26%, 17%)";
    // countryModal.classList.toggle("dark");
  } else {
    biMoon.style.color = "black";
    navbarBrand.style.color = "black";
    hFive.style.color = "black";
    navbar.style.backgroundColor = "white";
  }
  // moon.classList.toggle("bi");
});

const countryModal = document.querySelector(".countryModal");

function showDetail(data) {
  countryModal.classList.toggle("show");
  countryModal.innerHTML = `<button class="back">Back</button>
  <div class="modal">
    <div class="leftModal">
    <img src="${data.flags.svg}" width="600px" alt="" />
    </div>
    <div class="rightModal">
      <h1 class = 'h1'>${data.name.common}</h1>
     <div class="modalInfo">
        <div class="innerLeft inner">
            <p><strong>NativeName</strong>: ${
              Object.values(data.name.nativeName)[0].common
            };</p>
            <p ><strong>population</strong>: ${data.population}</p>
            <p><strong>Region</strong>: ${data.region}</p>
            <p>SubRegion <strong>: ${data.subregion}</strong></p>
          </div>
          <div class="innerRight inner">
            <p><strong>Capital</strong>: ${data.capital}</p>
            <p ><strong>TopLevelDomain</strong>: ${data.tld[0]}</p>
            <p><strong>Currencies</strong>: ${
              Object.values(data.currencies)[0].name
            }</p>
            <p><strong>Languages</strong> ${
              Object.values(data.languages)[0]
            }</p>
            
          </div>
          </div>
        </div>
     </div>
  </div>
  
  `;
  console.log();
  const back = countryModal.querySelector(".back");

  back.addEventListener("click", () => {
    countryModal.classList.toggle("show");
  });
}

hTwo.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
  if (document.body.classList.contains("dark")) {
    hTwo.classList.toggle("white");
    // countryModal.classList.toggle("shadow");
    hTwo.style.backgroundColor = "white";
  } else {
    hTwo.style.backgroundColor = "hsl(207, 26%, 17%)";
  }
});

getCountry();
