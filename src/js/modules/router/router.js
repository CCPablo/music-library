const pages = [
    $('.results'),
    $('.favorites')
]

export function setActive(page) {
    hideAll()
    page.removeClass('hidden')
}

function hideAll() {
    pages.forEach(page => page.addClass('hidden'))
}