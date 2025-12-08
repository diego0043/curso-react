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


const getRandomGiftUrl = async () => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
}

getRandomGiftUrl().then((url) => createImageOnDom(url))