import { search } from './modules/store/music.store.js'
import { Vinyl } from './modules/components/Vinyl.js'
import { requestCountryCodes } from './modules/controller/contries.controller.js'

const vinyl = new Vinyl({
    artworkUrl100: 'image',
    audioSample: 'sample'
});


$(function () {
    $('.player-wrapper').append(vinyl.html);

    requestCountryCodes();
    const searchForm = $('form.search')

    $("#add-filters-btn").on("click", showOptionalFilters)

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