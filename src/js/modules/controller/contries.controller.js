import { renderContriesOptions } from "../view/render.js"

export function requestCountryCodes () {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://www.liferay.com/api/jsonws/country/get-countries/',
        method: 'GET',
        headers: {
            'cache-control': 'no-cache',
            'Postman-Token': '82911a1c-e641-4024-83d5-af9191dc20f7',
        },
    }

    $.ajax(settings).done(function (response) {
        renderContriesOptions(response)
    })
}
