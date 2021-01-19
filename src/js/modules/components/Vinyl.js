import { Lp } from './Lp.js'

export class Vinyl extends Lp {
    constructor (image) {
        super(image)
        this.htmlTonearm = $(`<div class="player-element player-element-tonearm">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-340 -230 800 800" xml:space="preserve">
                    <path fill="#C1C1C5" d="M24.4,521.9l11.9,6.2c0,0,37.1-91.5,42.4-123.7c2.7-16.4-1.1-103.9-1.1-103.9V67.8H62.9l-0.1,232.7c0,0,3.7,87.5,1.1,103.9C58.9,434.9,24.4,521.9,24.4,521.9z"/>
                    <rect x="49.6" fill="#5b5b5f" width="40.7" height="67.8"/>
                    <circle fill="#5b5b5f" cx="69.9" cy="160.3" r="22.6"/>
                    <path fill="#5b5b5f" d="M22.9,499.2l18.3-22.9l13.2,6.4l-6.2,28.7l-22.8,47.1c0,0-1.2,3.3-15.4-3.6c-11.2-5.4-10-8.7-10-8.7L22.9,499.2z"/>
            </svg>
        </div>`)
        this.html = $('<div>')
            .addClass('player-container')
            .append(
                $('<div>')
                    .addClass('player')
                    .append(this.htmlLp, this.htmlTonearm)
            )
    }

    rotateArm() {

    }
}
