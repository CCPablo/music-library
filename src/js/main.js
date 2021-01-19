import { search } from './modules/store/music.store.js'
import { Vinyl } from './modules/components/Vinyl.js'

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
    const searchForm = $('form.search')
    searchForm.find('input, select').on('input', function(event){
        console.log(event)
        //if (searchForm){}
    })
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
