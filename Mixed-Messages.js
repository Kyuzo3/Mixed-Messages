const animeList = ["Demon Slayer","Hunter x Hunter","Full Metal Alchemist","Shingeki no kyojin","Death Note","Boku no Hero Academia","Pokemon","Naruto","DBZ","One piece","Gintama","Promise Land"]

const randomAnime = () => {
    
    console.log('The anime of the week is: '+ animeList[randomNum]+'!')
}

const randomNum = Math.floor(Math.random()* animeList.length);
randomAnime();