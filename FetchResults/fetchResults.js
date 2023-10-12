import displayResults from "../DisplayResults/displayResults.js";

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'kImzU8VMCGsSGZAagp00S8ACjOPp9G3k';

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');

export default function fetchResults(e, pageNumber) {
    e.preventDefault();
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;
    if(startDate.value !== "") {
        url = `${url}&begin_date=${startDate.value}`; 
    }
    if(endDate.value !== "") {
        url = `${url}&end_date=${endDate.value}`;
    }

    fetch(url)
    .then((response) => response.json())
    .then((json) => displayResults(json))
    .catch((error) => console.error(`error fetching data: ${error.message}`));
}