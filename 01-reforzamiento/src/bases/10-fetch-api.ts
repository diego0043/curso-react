import type { GiphyRandomResponse } from "../heroes/giphy.response";

const API_KEY = "86fdTEL7alKkQX6Twz0BDw2GTLVLmwsx";

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageOnDom = (url: string) => {
        const imgDiv = document.createElement('img')
        imgDiv.src = url;
        document.body.append(imgDiv)
}

myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageURL = data.images.original.url;
        createImageOnDom(imageURL);
    })
    .catch((err) => { });
