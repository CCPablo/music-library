import { search } from './modules/store/music.store.js'
import { Vinyl } from './modules/components/Vinyl.js'
import { requestCountryCodes } from './modules/controller/contries.controller.js'

const vinyl = new Vinyl();
$(document.body).append(vinyl.html);

$(function () {
    requestCountryCodes();
    const searchForm = $('form.search')

    searchForm.find('input, select').on('input', function(){
        let searchSettings = {};
        searchForm.find('input, select').each(function(){
            searchSettings[$(this).attr('name')] = $(this).val()
        });
        setExplicit(searchSettings);
        search(searchSettings)
    })

    function setExplicit (searchSettings) {
        if ($("#explicit-filter")[0].checked){
            searchSettings.explicit="yes";
        }else{
            searchSettings.explicit="no";
        }
    }
})
