export class MusicVideo {
    constructor(track) {
        this.id = track.trackId
        this.cover = track.artworkUrl100
        this.name = track.trackName
        this.price = track.trackPrice
        this.millisDuration = track.trackTimeMillis
        this.artistName = track.artistName
        this.collectionName = track.collectionName
        this.releaseDate = new Date(track.releaseDate)
        this.videoSample = track.previewUrl
        this.itunesLink = track.trackViewUrl
    }

    get html () {
        return $('<div>')
            .addClass('item-global-video')
            .append(this.htmlTitle)
            .append(this.htmlCover)
            .append(this.htmlButtons)
            .append(this.htmlDetails)
    }

    get htmlTitle() {
        return $('<h2>').addClass('item-title').text(this.name).css({
            fontFamily: 'Helvetica, cursive',
        })
    }

    get htmlCover() {
        return $('<div>')
            .addClass('video-cover')
            .css({
                width: 'auto',
                height: '10em',
                overFlow: 'hidden'
            })
            .append(
                $('<video>')
                    .addClass('music-video')
                    .attr('width', '300')
                    .attr('heigh', '200')
                    .on('click', function(){
                        $(this).trigger('play')
                    })
                    .on('dblclick', function(){
                        $(this).trigger('pause')
                    })
                    .append(
                        $('<source>')
                            .addClass('video-source')
                            .attr('src', this.videoSample)
                            .attr('type', 'video/mp4')
                    )
                    .append(
                        $('<source>')
                            .addClass('video-source')
                            .attr('src', this.videoSample)
                            .attr('type', 'video/ogg')
                    )
                    .append(
                        $('<source>')
                            .addClass('video-source')
                            .attr('src', this.videoSample)
                            .attr('type', 'video/mv4')
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
        return $('<h3>').addClass('item-artist').text(this.artistName)
    }

    get htmlSample() {
        return $('<a>')
            .addClass('item-sample')
            .attr('href', this.videoSample)
            .append($('<button>').text('video'))
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
            .addClass('item-details-video')
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

    get htmlButtons() {
        return $('<div>')
            .addClass('item-buttons')
            .append(this.htmlSample)
            .append(this.htmlPrice)
            .append(this.htmlFavorite)
    }

}
