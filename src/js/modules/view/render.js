import { isFavourite, getFavorites } from "../store/favorites.store.js"
import { getResultById, getResults } from "../store/music.store.js"

let $results = $('.results')
let $favorites = $('.favorites')
let $countryFilter = $('#country-filter')

export function renderResults () {
    $results.html(getResults().map(result => result.html))
}

export function renderFavorites () {
    $favorites.html(getFavorites().map(favourite => favourite.html))
}

export function updateFavourite (id) {
    getResultById(id).html.find('.item-favorite img').attr(
        'src',
        isFavourite(id)
            ? '/src/assets/images/star_fav_true.png'
            : '/src/assets/images/star_fav.png'
    )
}

export function renderContriesOptions (countryCodes) {
    countryCodes.map(function (current) {
        $countryFilter.append(
            $(
                `<option value="${current.a2}">${current.nameCurrentValue}</option>`
            )
        )
    })
    $countryFilter.find("option[value='US']").attr('selected', 'selected')
}
