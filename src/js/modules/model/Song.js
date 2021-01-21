import { Lp } from '../components/Lp.js'
import { getCurrentRotation } from '../components/util.js'
import { toggleFavourite } from '../store/favorites.store.js'
import { isFavourite } from '../store/favorites.store.js'

export class Song {
    constructor (track) {
        this.id = track.trackId
        this.cover = track.artworkUrl100
        this.name = track.trackName
        this.price = track.trackPrice
        this.millisDuration = track.trackTimeMillis
        this.artistName = track.artistName
        this.collectionName = track.collectionName
        this.releaseDate = new Date(track.releaseDate)
        this.audioSample = track.previewUrl
        this.itunesLink = track.trackViewUrl
        this.vinyl = new Lp(this.cover)
        this.type = 'Song'
    }

    get html () {
        return $('<div>')
            .addClass('item-global')
            .append(this.htmlTitle)
            .append(this.htmlCover)
            .append(this.htmlButtons)
    }

    get htmlTitle () {
        return $('<h2>')
            .addClass('item-title')
            .text(this.name)
            .css({
                fontFamily: 'Helvetica, cursive',
            })
    }

    get htmlCover () {
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
                    .append(
                        this.vinyl.htmlLp
                            .addClass('vinyl vinyl-inside')
                            .draggable({
                                revert: 'invalid',
                                opacity: '0.4',
                                helper: () => {
                                    return $(this.vinyl.htmlLp)
                                        .clone()
                                        .data('id', this.id)
                                        .removeClass('vinyl-inside')
                                        .css('transition', 'none')
                                        .css(
                                            'transform',
                                            `translate(18px, 18px) rotateZ(${getCurrentRotation(
                                                this.vinyl.htmlLp
                                            )})`
                                        )
                                },
                                cursor: 'move',
                            })
                    )
                    .append(
                        $('<div>')
                            .addClass('flip-cover-back')
                            .append(this.htmlDetails)
                    )
            )
    }

    get htmlPrice () {
        return $('<a>')
            .addClass('item-price')
            .attr('href', this.itunesLink)
            .append($('<button>').text(this.price + '$'))
    }

    get htmlArtist () {
        return $('<h3>')
            .addClass('item-artist')
            .text(this.artistName)
    }

    get htmlSample () {
        return $('<a>')
            .addClass('item-sample')
            .attr('href', this.audioSample)
            .append($('<button>').text('sample'))
    }

    get htmlFavorite () {
        return $('<div>')
            .addClass('item-favorite')
            .on('click', () => {
                toggleFavourite(this)
            })
            .append(
                $('<img>')
                    .attr('width', '25px')
                    .attr(
                        'src',
                        isFavourite(this.id)
                            ? '/src/assets/images/star_fav_true.png'
                            : '/src/assets/images/star_fav.png'
                    )
            )
    }

    get htmlDetails () {
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
                    .addClass('details-collection')
                    .text('Collection: ' + this.collectionName)
            )
            .append(
                $('<div>')
                    .addClass('details-release')
                    .text('Release: ' + this.releaseDate.getFullYear())
            )
            .append(
                $('<div>')
                    .addClass('details-duration')
                    .text(min + 'min ' + seconds + 's')
            )
    }

    get htmlButtons () {
        return $('<div>')
            .addClass('item-buttons')
            .append(this.htmlSample)
            .append(this.htmlPrice)
            .append(this.htmlFavorite)
    }
}
