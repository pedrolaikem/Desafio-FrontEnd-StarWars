export default function linkToPlanet(urlHome) {
    //Fórmula para calcular o url do planeta e o folder
    let newUrl = parseInt(urlHome.split("/")[5]);
    let pasta = Math.ceil(newUrl / 10);
    newUrl = (newUrl - 1) % 10;
    return { pasta, newUrl }
}