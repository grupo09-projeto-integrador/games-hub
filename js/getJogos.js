const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6491e5bb7fmshf3fa2279323d6a7p1674e8jsndbbb08cdac8c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
export async function consultaJogos(filtro="filter?tag=3d.mmorpg.fantasy.pvp&platform=pc"){
	return await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/${filtro}`, options).then(response => response.json());
	
}


