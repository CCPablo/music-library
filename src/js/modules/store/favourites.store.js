import { Song } from '../model/Song.js'
import { Album } from '../model/Album.js'
import { Artist } from '../model/Artist.js'
import { MusicVideo } from '../model/MusicVideo.js'

let favourites = [];

$(function (){
    getFavouritesFromLS();
})

function getFavouritesFromLS() {
    if (localStorage.getItem("favourites", favourites)!=null) {
        JSON.parse(localStorage.getItem("favourites")).map(function (element) {
            favourites.push(reInstance(element));
        });
    }
}

function reInstance (itemFromLS) {
    if (itemFromLS.topology==="Song") {
        itemFromLS = convertSong(itemFromLS);
        return new Song (itemFromLS);
    }else if (itemFromLS.topology==="Album"){
        itemFromLS = convertAlbum(itemFromLS);
        return new Album (itemFromLS);
    }else if (itemFromLS.topology==="Artist"){
        itemFromLS = convertArtist(itemFromLS);
        return new Artist (itemFromLS);
    }else if (itemFromLS.topology==="MusicVideo"){
        itemFromLS = convertMusicVideo(itemFromLS);
        return new MusicVideo (itemFromLS);
    }else {
        alert("Error: topology failed");
    }
}

function convertSong(input) {
    return {
        trackId: input.id,
        artworkUrl100: input.cover,
        trackName: input.name,
        trackPrice: input.price,
        trackTimeMillis: input.millisDuration,
        artistName: input.artistName,
        collectionName: input.collectionName,
        releaseDate: input.releaseDate,
        previewUrl: input.audioSample,
        trackViewUrl: input.itunesLink,
        vinyl: input.vinyl,
    }
}

function convertAlbum (input) {
    return {
        collectionId: input.id,
        artworkUrl60: input.cover,
        collectionName: input.name,
        collectionPrice: input.price,
        trackCount: input.trackCount,
        artistName: input.artistName,
        releaseDate: input.releaseDate,
        primaryGenreName: input.genre,
    }
}

function convertArtist (input) {
    return {
        artistId: input.id,
        artistName: input.name,
        primaryGenreName: input.genre,
        artistLinkUrl: input.itunesLink,

    }
}

function convertMusicVideo (input) {
    return {
        trackId: input.id,
        artworkUrl60: input.cover,
        trackName: input.name,
        trackPrice: input.price,
        trackTimeMillis: input.millisDuration,
        artistName: input.artistName,
        collectionName: input.collectionName,
        releaseDate: input.releaseDate,
        previewUrl: input.videoSample,
        trackViewUrl: input.itunesLink,
    }
}

export function toggleFavourite (newFav) {
    if (newFav instanceof Song) {
        newFav.topology = 'Song';
    }else if ($ewFav instanceof Album) {
        newFav[topology] = 'Album';
    }else if (newFav instanceof Artist) {
        newFav[topology] = 'Aratist';
    }else if (newFav instanceof MusicVideo) {
        newFav[topology] = 'MusicVideo';
    }else{
        alert("Error: tipology not found");
    }
    favourites.push(newFav);
    localStorage.setItem("favourites", JSON.stringify(favourites));
}

// export function checkIfFavourite(query) {
//     favourites.forEach((element) => {
//         console.log(element.id, query.id);
//         if (element.id===query.id) {  
//             return true     
//         }else{
//             return false
//         }
//     });
// }

export function checkIfFavourite(id) {
    console.log(id,favourites.map(favourite => favourite.id));
    console.log(favourites.indexOf(favourite => favourite.id == id));
    return favourites.indexOf(favourite => favourite.id == id)!=-1;
}