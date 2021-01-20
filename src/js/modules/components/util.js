

export function getCurrentRotation (element) {
    var matrix = element.css('transform')
    let angle = 0
    if (matrix !== 'none' && matrix) {
        let values = matrix
            .split('(')[1]
            .split(')')[0]
            .split(',')
        let a = values[0]
        let b = values[1]
        angle = Math.atan2(b, a) * (180 / Math.PI)
    }
    return angle < 0 ? angle + 360 + 'deg' : angle + 'deg'
}

export function setOriginTarget (element, origin, target) {
    element.css('--rotationZ-origin', origin, '0deg')
    element.css('--rotationZ-target', target, '360deg')
}