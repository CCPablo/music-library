

let $countryFilter=$('#country-filter');

export function countrySelect (countryCodes) {
    countryCodes.map(function(current){
        $countryFilter.append($(`<option value="${current.a2}">${current.nameCurrentValue}</option>`));
    })
    $("#country-filter > option[value='US']").attr('selected', 'selected');
}

export function explicitParam (searchSettings) {
    if ($("#explicit-filter")[0].checked){
        searchSettings.explicit="yes";
    }else{
        searchSettings.explicit="no";
    }
    return searchSettings
}