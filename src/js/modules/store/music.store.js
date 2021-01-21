import { query } from '../controller/music.controller.js'
import { Album } from '../model/Album.js'
import { Artist } from '../model/Artist.js'
import { MusicVideo } from '../model/MusicVideo.js'
import { Song } from '../model/Song.js'
import { renderResults } from '../view/render.js'

let results = []

export function search (queryParams) {
    query(saveResults, queryParams)

    function saveResults (response) {
        response.results = response.results.map(mapToModel)
        results = response.results
        renderResults(results)
    }
}

export function getResultById (id) {
    return results.find(result => result.id == id)
}

export function getResults () {
    return results
}

function mapToModel (item) {
    if (item.wrapperType === 'track' && item.kind === 'song') {
        return new Song(item)}
    else if(item.wrapperType === 'collection' && item.collectionType === 'Album') {
        return new Album(item)}
    else if (item.wrapperType === 'artist' && item.artistType === 'Artist') {
        return new Artist(item)}
    else if (item.wrapperType === 'track' && item.kind === 'music-video') {
        return new MusicVideo(item)
    } else {
        return {
            html: ''
        }
    }
}