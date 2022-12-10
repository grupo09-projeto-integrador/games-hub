import { jogos } from './getJogos.js'
let games = jogos();
export function exibe(){
    const container = document.getElementById("conteudo-main")
    for(var x = 0; x < 10; x++){
        let imageDiv = document.createElement("div");
        let detailsDiv = document.createElement("div");
        let moreDiv = document.createElement("div");
        let iconsDiv = document.createElement("div");
        let readMore = document.createElement("a");
        let titulo = document.createElement("h2");
        let img = document.createElement("img");
        let spanStar = document.createElement("span");
        let icon = document.createElement("i");

        img.src = games[x].thumbnail;
        titulo.innerText = games[x].title   
        readMore.innerText = games[x].short_description

        imageDiv.classList.add("image");
        detailsDiv.classList.add("details");
        moreDiv.classList.add("more");
        readMore.classList.add("read-more");
        iconsDiv.classList.add("icons");
        spanStar.classList.add("star");
        


        imageDiv.appendChild(img);
        imageDiv.appendChild(detailsDiv);
        detailsDiv.appendChild(titulo);
        detailsDiv.appendChild(moreDiv);
        moreDiv.appendChild(readMore);
        moreDiv.appendChild(iconsDiv);
        iconsDiv.appendChild(spanStar);
        spanStar.appendChild(icon);

        container.appendChild(imageDiv);
    }
}