import { adjustIndex } from "./adjustIndex";

export default function linkToShip( urlNaves ) {
    let newUrl = parseInt(urlNaves.split("/")[5]);
    let newUrl2 = adjustIndex(newUrl)
    let pasta = Math.ceil(newUrl2 / 10);
    newUrl2 = (newUrl - 1) % 10;
    return { pasta, newUrl2 }
}