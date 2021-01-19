import { search } from './modules/store/music.store.js'
import { Vinyl } from './modules/components/Vinyl.js'
import { requestCountryCodes } from './modules/controller/contries.controller.js'

search({
    term: 'peter+johnson',
})

const vinyl = new Vinyl();
$(document.body).append(vinyl.html);

setTimeout(() => {
    vinyl.rotate(700, 2000)
    console.log(vinyl.htmlLp)
}, 2000)

setTimeout(() => {
    vinyl.rotate(350, 2000)
}, 4000)

setTimeout(() => {
    vinyl.resetRotation()
    vinyl.setImage('https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg')
}, 7000)



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
