import { search } from './modules/store/music.store.js'

search({
    term: 'peter+johnson',
})

$(function () {
    const searchForm = $('form.search')

    searchForm.on('submit', function (event) {
        event.preventDefault()
        const searchSettings = {};
        $(this).find('input, select').each(function(){
            searchSettings[$(this).attr('name')] = $(this).val()
        });
        console.log(searchSettings)
        search(searchSettings)
    })
})
