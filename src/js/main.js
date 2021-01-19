import { search } from './modules/store/music.store.js'
import { requestCountryCodes } from './modules/controller/music.controller.js'
import { explicitParam} from './modules/view/filter.js'

$(function () {
    requestCountryCodes();
    const searchForm = $('form.search')
    // searchForm.find('input, select').on('input', function(event){
    //     if (searchForm){}
    // })
    searchForm.on('submit', function (event) {
        event.preventDefault()
        let searchSettings = {};
        $(this).find('input, select').each(function(){
            searchSettings[$(this).attr('name')] = $(this).val()
        });
        searchSettings = explicitParam(searchSettings);
        search(searchSettings)
    })
})
