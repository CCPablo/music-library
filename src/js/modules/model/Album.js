import { Lp } from '../components/Lp.js'

export class Album {
    constructor(album) {
        this.id = album.collectionId
        this.cover = album.artworkUrl100
        this.name = album.collectionName
        this.price = album.collectionPrice
        this.trackCount = album.trackCount
        this.artistName = album.artistName
        this.releaseDate = new Date(album.releaseDate)
        this.genre = album.primaryGenreName
        this.vinyl = new Lp(this.cover)
        this.topology = "Album"

    }

    get html() {
        return $('<div>')
            .addClass('item-global')
            .append(this.htmlTitle)
            .append(this.htmlCover)
            .append(this.htmlPrice)
            .append(this.htmlFavorite)
    }

    get htmlTitle() {
        return $('<h2>').addClass('item-title').text(this.name + ' (album)').css({
            fontFamily: 'Helvetica, cursive'
        })
    }

    get htmlCover() {
        return $('<div>')
            .addClass('flip-cover')
            .css({
                width: '10em',
                height: '10em',
            })
            .append(
                $('<div>')
                    .addClass('flip-cover-inner')
                    .append(
                        $('<div>')
                            .addClass('flip-cover-front')
                            .css({
                                backgroundImage: 'url(' + this.cover + ')',
                                backgroundSize: 'cover',
                            })
                    )
                    .append(this.vinyl.htmlLp.addClass('vinyl'))
                    .append(
                        $('<div>')
                            .addClass('flip-cover-back')
                            .append(this.htmlDetails)
                    )
            )
    }

    get htmlPrice() {
        return $('<a>')
            .addClass('item-price')
            .attr('href', this.itunesLink)
            .append($('<button>').text(this.price + '$'))
    }

    get htmlArtist() {
        return $('<h3>').addClass('item-artist').text('By ' + this.artistName)
    }

    get htmlTrackCount() {
        return $('<h3>')
            .addClass('item-tracks')
            .text('It has ' + this.trackCount + ' songs')

    }

    get htmlGenre () {
        return $('<h3>')
            .addClass('item-genre')
            .text('Genre: ' + this.genre)
            .css({
                fontFamily: 'Helvetica, cursive',
                textAlign: 'centre'
            })
    }

    get htmlFavorite() {
        return $('<a>')
            .addClass('item-favorite')
            .on('click', function () {
                //execute saving favorite
            })
            .attr('saved', false)
            .append($('<button>').text('star'))
    }

    get htmlDetails() {
        let min = Math.floor((this.millisDuration / 1000 / 60) << 0)
        let seconds = Math.floor((this.millisDuration / 1000) % 60)
        return $('<div>')
            .addClass('item-details')
            .append(
                $('<div>')
                    .addClass('details-artist')
                    .text('Artist: ' + this.artistName)
            )
            .append(
                $('<div>')
                    .addClass('details-track-number')
                    .text('It has ' + this.trackCount + ' songs')
            )
            .append(
                $('<div>')
                    .addClass('details-release')
                    .text('Release: ' + this.releaseDate.getFullYear())
            )
            .append(this.htmlGenre)
    }

    get htmlButtons() {
        return $('<div>')
            .addClass('item-buttons')
            .append(this.htmlSample)
            .append(this.htmlPrice)
            .append(this.htmlFavorite)
    }
}
