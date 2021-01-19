import { search } from './modules/store/music.store.js'
import { requestCountryCodes } from './modules/controller/contries.controller.js'

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
