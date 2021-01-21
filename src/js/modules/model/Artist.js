import { isFavourite, toggleFavourite } from "../store/favorites.store.js";

export class Artist {
    constructor(artist) {
        this.id = artist.artistId;
        this.name = artist.artistName
        this.genre = artist.primaryGenreName
        this.itunesLink = artist.artistLinkUrl
        this.type = "Artist"
    }

    get html() {
        return $('<div>')
            .addClass('item-global-artist')
            .append(this.htmlTitle)
            .append(this.htmlGenre)
            .append(this.htmlArtistLink)
            .append(this.htmlFavorite)
    }

    get htmlTitle () {
        return $('<h2>')
            .addClass('item-title-artist')
            .text(this.name)
            .css({
                fontFamily: 'Helvetica, cursive',
            })
    }

    get htmlGenre () {
        return $('<h3>')
            .addClass('item-genre')
            .text('Genre: ' + this.genre)
            .css({
                fontFamily: 'Helvetica, cursive',
            })
    }

    get htmlArtistLink (){
        return $('<a>')
        .addClass('item-artist-link')
        .attr("href", this.itunesLink)
        .append($('<button>')
            .text('Link to profile')
        )
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




}