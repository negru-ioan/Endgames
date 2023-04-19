const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd656191a87mshdd751ade1d28748p11513cjsn861ffa208d2f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';

export const fetchGames = async (url) => {
	const arr = await fetch(`${BASE_URL}/${url}`, options)
	const res = await arr.json()
	return res
}
