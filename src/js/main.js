import { search } from './modules/store/music.store.js'
import { Vinyl } from './modules/components/Vinyl.js'
import { requestCountryCodes } from './modules/controller/contries.controller.js'
import { renderFavorites } from './modules/view/render.js';
import { setActive } from './modules/router/router.js';

const vinyl = new Vinyl({
    artworkUrl100: '',
    audioSample: ''
});

let timer = null;

$(function () {
    renderFavorites()
    setActive($('.results'))

    $('.nav-results').on('click', function() {
        $('.nav-favorites').removeClass('active')
        $(this).addClass('active')
        setActive($('.results'))
        vinyl.setEmpty();
    })

    $('.nav-favorites').on('click', function() {
        $('.nav-results').removeClass('active')
        $(this).addClass('active')
        setActive($('.favorites'))
        vinyl.setEmpty();
    })

    $('.player-wrapper').append(vinyl.html);

    requestCountryCodes();
    const searchForm = $('form.search')

    $("#add-filters-btn").on("click", showOptionalFilters)

    searchForm.find('input, select').on('input', function() {
        if(!$('input[name="term"]').val()) {
            return
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            let searchSettings = {};
            searchForm.find('input, select').each(function(){
                searchSettings[$(this).attr('name')] = $(this).val()
            });
            setExplicit(searchSettings);
            search(searchSettings)
        }, 500)
    })

    function setExplicit (searchSettings) {
        if ($("#explicit-filter")[0].checked){
            searchSettings.explicit="yes";
        }else{
            searchSettings.explicit="no";
        }
    }
})

function showOptionalFilters () {
    $("#add-filters-btn").off("click", showOptionalFilters);
    $("#add-filters-btn").addClass("hide-me");
    $(".optional-filters").removeClass("hide-me");
    $("#hide-filters-btn").removeClass("hide-me");
    $("#hide-filters-btn").on("click", hideOptionalFilters)
}

function hideOptionalFilters () {
    $("#hide-filters-btn").off("click", hideOptionalFilters)
    $("#add-filters-btn").on("click", showOptionalFilters);
    $("#add-filters-btn").removeClass("hide-me");
    $(".optional-filters").addClass("hide-me");
    $("#hide-filters-btn").addClass("hide-me");
}

document.querySelector('button').addEventListener('click', function() {
    context.resume().then(() => {
      console.log('Playback resumed successfully');
    });
  });