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
    }

    get html() {
        return $('<div>')
        .addClass('item-global')
        .append(this.htmlTitle)
        .append(this.htmlCover)
        .append(this.htmlPrice)
        .append(this.htmlSample)

        
    }

    get htmlTitle () {
        return $('<h2>')
            .addClass('item-title')
            .text(this.name)
            .css({
                fontFamily: '"Boogaloo", cursive',
            })
    }

    get htmlCover () {
        return $('<div>')
            .addClass('flip-cover')
            .css({
                width: '10em',
                height: '10em',
                backgroundImage : 'url(' + this.cover + ')',
                backgroundSize : 'cover'
            }).append($('<div>')
                .addClass('flip-cover-inner')
                .append($('div')
                    .addClass('flip-cover-front')
                    .append($('<img>')
                        .attr('src', this.cover)
                        )
                    )
                .append($('<div>')
                    .addClass('flip-cover-back')
                    .append(this.htmlDetails)
                    )
                )
    }

    get htmlPrice (){
        return $('<a>')
        .addClass('item-price')
        .attr("href", this.itunesLink)
        .append($('<button>')
            .text(this.price+'$')
        )
    }

    get htmlArtist (){
        return $('<h3>')
            .addClass('item-artist')
            .text(this.artistName)
    }

    get htmlSample (){
        return $('<a>')
        .addClass('item-sample')
        .attr("href", this.audioSample)
        .append($('<button>')
            .text('sample')
        )
    }

    get htmlDetails (){
        let min = Math.floor((this.millisDuration/1000/60) << 0)
        let seconds = Math.floor((this.millisDuration/1000) % 60)
        return $('<div>')
            .addClass('item-details')
            .append($('<div>')
                .addClass('details-artist')
                .text('Artist: ' + this.artistName)
            )
            .append($('<div>')
                .addClass('details-collection')
                .text('Collection: ' + this.collectionName)
            )
            .append($('<div>')
                .addClass('details-release')
                .text('Release: ' + this.releaseDate.getFullYear())
            )
            .append($('<div>')
                .addClass('details-duration')
                .text( min + 'min ' + seconds + 's' )
            )            
        }

    



}
