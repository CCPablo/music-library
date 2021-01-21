import { Song } from '../model/Song.js'
import { Album } from '../model/Album.js'
import { Artist } from '../model/Artist.js'
import { MusicVideo } from '../model/MusicVideo.js'
import { renderFavorites, renderResults } from '../view/render.js'

let favorites = []

$(function () {
    getFavoritesFromLS()
})

function getFavoritesFromLS () {
    if (localStorage.getItem('favorites', favorites) != null) {
        JSON.parse(localStorage.getItem('favorites')).map(function (element) {
            favorites.push(reInstance(element))
        })
    }
}

export function getFavorites() {
    return favorites
}

export function getFavoriteById(id) {
    return favorites.find(fav => fav.id == id)
}

export function toggleFavourite (item) {
    if (!isFavourite(item.id)) {
        addFavourite(item)
    } else {
        removeFavourite(item)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites.map(fav => {
        const clone = {...fav}
        delete clone['vinyl']
        return clone
    })))
    renderResults(item.id)
    renderFavorites(item.id)
}

function addFavourite (item) {
    favorites.push(item)
}

function removeFavourite (item) {
    favorites = favorites.filter(fav => fav.id !== item.id)
}

export function isFavourite (id) {
    return !!favorites.find(favourite => favourite.id == id)
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
