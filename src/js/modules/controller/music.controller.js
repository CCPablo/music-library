
export function query (
    done,
    queryParams
) {
    const url = `https://itunes.apple.com/search`
    const settings = {
        url: url,
        data: {
            term: queryParams.term,
            entity: queryParams.entity,
            country: queryParams.country,
            explicit: queryParams.explicit,
            limit: queryParams.limit
        },
        dataType: 'jsonp'
    };
    $.get(settings).done(done)
}




