// Defining a baseURL and key to as part of the request URL
import fetchResults from "./FetchResults/fetchResults.js"

// Grab references to all the DOM elements you'll need to manipulate

const searchForm = document.querySelector('form');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;

// Event listeners to control the functionality
searchForm.addEventListener("submit", submitSearch);

nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function nextPage(e) {
    pageNumber++;
    fetchResults(e, pageNumber);
}

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e, pageNumber);
}

function submitSearch(e) {
    pageNumber = 0;
    fetchResults(e, pageNumber);
}

