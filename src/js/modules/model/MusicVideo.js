export class MusicVideo {
    constructor (track) {
        this.id = track.trackId
        this.cover = track.artworkUrl60
        this.name = track.trackName
        this.price = track.trackPrice
        this.millisDuration = track.trackTimeMillis
        this.artistName = track.artistName
        this.collectionName = track.collectionName
        this.releaseDate = new Date(track.releaseDate)
        this.videoSample = track.previewUrl
        this.itunesLink = track.trackViewUrl
    }

    get html() {
        return $('<div>').text('item')
    }
}
