//import fetch from 'node-fetch';
const imgNode = document.querySelector('img.card__background');
const API =
{
    url: "https://pixabay.com/api/",
    api_key: "28590934-2ef9328b86c8689beb4ba4bc8",
    qP:
    {
        q:["people", "retrato"],
        image_type: "photo",
        orientation: "horizontal",
        per_page: "3"
    }
}

const fetchData = urlApi => fetch(urlApi);

fetchData(`${API.url}?key=${API.api_key}&q=${API.qP.q[0]}+${API.qP.q[1]}&image_type=${API.qP.image_type}&per_page=3&pretty`)
    .then(answer => answer.json())
    .then(images => images.hits[2].largeImageURL)
    .then(img => imgNode.src = img)
    .catch(error => console.error(error));