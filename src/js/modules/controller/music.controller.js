import { Song } from '../model/Song.js'
import { Album } from '../model/Album.js'
import { Artist } from '../model/Artist.js'
import { MusicVideo } from '../model/MusicVideo.js'

export function query (
    done,
    queryParams
) {
    const url = `https://itunes.apple.com/search`
    const settings = {
        url: url,
        data: {
            term: queryParams.term,
            entity: queryParams.entity,
            country: queryParams.country,
            explicit: queryParams.explicit,
            limit: queryParams.limit
        },
        dataType: 'jsonp'
    };
    $.get(settings).done(response => {
        response.results = response.results.map(mapToModel)
        done(response);
        console.log(response);
    })
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


