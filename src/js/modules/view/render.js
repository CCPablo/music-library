let $results = $('.results')

export function renderResults (results) {
    $results.html(results.map(result => result.html))
}
