let $results = $('.results')

export function renderResults (results) {
    console.log({...results})
    $results.html(results.map(result => result.html))
}
