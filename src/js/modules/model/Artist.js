export class Artist {
    constructor(artist) {
        this.id = artist.artistId;
        this.name = artist.artistName
        this.genre = artist.primaryGenreName
        this.itunesLink = artist.artistLinkUrl
    }

    get html() {
        return $('<div>').text('item')
    }
}