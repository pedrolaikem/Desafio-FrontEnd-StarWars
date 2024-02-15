export default function linkToPlanet(urlHome) {
    let newUrl = parseInt(urlHome.split("/")[5]);
    let pasta = Math.ceil(newUrl / 10);
    newUrl = (newUrl - 1) % 10;
    return { pasta, newUrl }
}