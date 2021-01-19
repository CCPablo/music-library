

let $countryFilter=$('#country-filter');

export function countrySelect (countryCodes) {
    console.log(countryCodes);
    countryCodes.map(function(current){
        console.log(current);
        $countryFilter.append($(`<option value="${current.a2}">${current.nameCurrentValue}</option>`));
    })
}