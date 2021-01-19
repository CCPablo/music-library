export class Album {
    constructor(album) {
        this.id = album.collectionId
        this.cover = album.artworkUrl60
        this.name = album.collectionName
        this.price = album.collectionPrice
        this.trackCount = album.trackCount
        this.artistName = album.artistName
        this.releaseDate = new Date(album.releaseDate)
        this.genre = album.primaryGenreName
    }

    get html() {
        return $('<div>').text(this.name)
    }
}
