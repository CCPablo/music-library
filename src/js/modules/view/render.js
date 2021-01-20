let $results = $('.results')
let $countryFilter = $('#country-filter')

export function renderResults (results) {
    $results.html(results.map(result => result.html))
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
