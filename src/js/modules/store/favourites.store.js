import { Song } from '../model/Song.js'
import { Album } from '../model/Album.js'
import { Artist } from '../model/Artist.js'
import { MusicVideo } from '../model/MusicVideo.js'
import { renderResults } from '../view/render.js'

let favourites = []

$(function () {
    getFavouritesFromLS()
})

function getFavouritesFromLS () {
    if (localStorage.getItem('favourites', favourites) != null) {
        JSON.parse(localStorage.getItem('favourites')).map(function (element) {
            favourites.push(reInstance(element))
        })
    }
}

function reInstance (itemFromLS) {
    if (itemFromLS.type === 'Song') {
        itemFromLS = convertSong(itemFromLS)
        return new Song(itemFromLS)
    } else if (itemFromLS.type === 'Album') {
        itemFromLS = convertAlbum(itemFromLS)
        return new Album(itemFromLS)
    } else if (itemFromLS.type === 'Artist') {
        itemFromLS = convertArtist(itemFromLS)
        return new Artist(itemFromLS)
    } else if (itemFromLS.type === 'MusicVideo') {
        itemFromLS = convertMusicVideo(itemFromLS)
        return new MusicVideo(itemFromLS)
    } else {
        alert('Error: type failed')
    }
}

function convertSong (input) {
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

export function toggleFavourite (item) {
    if (!isFavourite(item.id)) {
        addFavourite({ ...item })
    } else {
        removeFavourite(item)
    }
    localStorage.setItem('favourites', JSON.stringify(favourites))
    renderResults()
}

function addFavourite (item) {
    console.log(item)
    delete item['vinyl']
    favourites.push(item)
}

function removeFavourite (item) {
    favourites = favourites.filter(fav => fav.id !== item.id)
}

export function isFavourite (id) {
    return !!favourites.find(favourite => favourite.id == id)
}
