import { query } from '../controller/music.controller.js'
import { renderResults } from '../view/render.js'

let results = []

export function search(queryParams) {
    query(saveResults, queryParams)

    function saveResults(response) {
        results = response.results
        renderResults(results)
    }
}
