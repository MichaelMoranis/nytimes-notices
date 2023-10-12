const section = document.querySelector('section');
const nav = document.querySelector('nav');

export default function displayResults(json) {
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }
    const articles = json.response.docs;
    nav.style.display = articles.length === 10 ? "block" : "none";

    if(articles.length === 0) {
        const para = document.createElement("p");
        para.textContent = "no results returned";
        section.appendChild(para);
    } else {
        for(const current of articles) {
            const article = document.createElement("article");
            const heading = document.createElement("h2");
            const link = document.createElement("a");
            const img = document.createElement("img");
            const para1 = document.createElement("p");
            const keywordPara = document.createElement("p");
            keywordPara.classList.add("keywords");

            console.log(current);

            link.href = current.web_url;
            link.textContent = current.headline.main;
            para1.textContent = current.snippet;
            keywordPara.textContent = "keywords:  ";
            for(const keyword of current.keywords) {
                const span = document.createElement("span");
                span.textContent = `${keyword.value} `;
                keywordPara.appendChild(span);
            }
            if(current.multimedia.length > 0) {
                img.src = `http://www.nytimes.com/${current.multimedia[0].url}`;
                img.alt = current.headline.main;
            }
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            article.appendChild(keywordPara);
            section.appendChild(article);
        }
    }
}