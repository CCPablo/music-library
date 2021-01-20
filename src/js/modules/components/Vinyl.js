import { Lp } from './Lp.js'
import { getCurrentRotation, setOriginTarget } from './util.js'

export class Vinyl extends Lp {
    constructor (image) {
        super(image)
        this.htmlTonearm = $(`<div class="player-element player-element-tonearm">
<svg version="1.1" viewBox="-340 -230 800 800" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><defs><filter id="filter5231" color-interpolation-filters="sRGB"><feGaussianBlur result="result1" stdDeviation="3"/><feBlend in="result1" in2="result1" mode="multiply" result="result5"/><feGaussianBlur in="result5" result="result6" stdDeviation="1"/><feComposite in="result6" in2="result5" operator="xor" result="result8"/><feComposite in="result6" in2="result8" operator="xor" result="fbSourceGraphic"/><feSpecularLighting lighting-color="rgb(255,255,255)" in="fbSourceGraphic" result="result1" specularConstant="2.2" specularExponent="55" surfaceScale="2"><fePointLight x="-5000" y="-10000" z="20000"/></feSpecularLighting><feComposite in="result1" in2="fbSourceGraphic" operator="in" result="result2"/><feComposite in="fbSourceGraphic" in2="result2" k2="2" k3="1" operator="arithmetic" result="result4"/><feComposite in="result4" in2="result4" operator="in" result="result91"/><feBlend in2="result91" mode="darken"/></filter><filter id="filter5259" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" result="result0" stdDeviation="2.3"/><feMorphology in="SourceAlpha" radius="6.6" result="result1"/><feGaussianBlur in="result1" stdDeviation="8.9"/><feColorMatrix result="result91" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.3 0"/><feComposite in="result0" in2="result91" operator="out" result="result2"/><feGaussianBlur result="result4" stdDeviation="1.7"/><feDiffuseLighting surfaceScale="10"><feDistantLight azimuth="225" elevation="45"/></feDiffuseLighting><feBlend in2="SourceGraphic" mode="multiply"/><feComposite in2="SourceAlpha" operator="in" result="result3"/><feSpecularLighting in="result4" specularExponent="17.9" surfaceScale="5"><feDistantLight azimuth="225" elevation="45"/></feSpecularLighting><feComposite in2="result3" operator="atop"/></filter><filter id="filter5293" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceGraphic" result="result6" stdDeviation="10"/><feComposite in="result6" in2="SourceGraphic" operator="xor"/><feGaussianBlur result="result2" stdDeviation="10"/><feComposite in2="SourceGraphic" operator="atop" result="result91"/><feComposite in="result2" in2="result91" operator="xor" result="result4"/><feGaussianBlur in="result4" result="result3" stdDeviation="5"/><feSpecularLighting lighting-color="rgb(255,255,255)" in="result3" result="result5" specularConstant="3" specularExponent="35" surfaceScale="12"><feDistantLight azimuth="235" elevation="45"/></feSpecularLighting><feComposite in="SourceGraphic" in2="result5" k2="0.8" k3="0.7" operator="arithmetic" result="result7"/><feComposite in="result7" in2="SourceGraphic" operator="in"/></filter><filter id="filter5429" color-interpolation-filters="sRGB"><feMorphology in="SourceAlpha" radius="4.3" result="result91"/><feComposite in="SourceGraphic" in2="result91" operator="out"/><feGaussianBlur result="result0" stdDeviation="1.2"/><feDiffuseLighting><feDistantLight azimuth="225" elevation="66"/></feDiffuseLighting><feBlend in2="SourceGraphic" mode="multiply"/><feComposite in2="SourceAlpha" operator="in"/></filter></defs>
                    <path d="m24.4 521.9 11.9 6.2s37.1-91.5 42.4-123.7c2.7-16.4-1.1-103.9-1.1-103.9v-232.7h-14.7l-0.1 232.7s3.7 87.5 1.1 103.9c-5 30.5-39.5 117.5-39.5 117.5z" fill="#C1C1C5" filter="url(#filter5429)"/><g fill="#5b5b5f">
                    <rect x="49.6" width="40.7" height="67.8" filter="url(#filter5231)"/>
                    <circle cx="69.9" cy="160.3" r="22.6" filter="url(#filter5259)"/>
                    <path d="m22.9 499.2 18.3-22.9 13.2 6.4-6.2 28.7-22.8 47.1s-1.2 3.3-15.4-3.6c-11.2-5.4-10-8.7-10-8.7l22.9-47z" filter="url(#filter5293)"/>
            </g></svg>
        </div>`)
        this.button = $('<div class="player-button"></div>').on('click', () => {
            this.play()
        })
        this.html = $('<div>')
            .addClass('player-container wood')
            .append(
                $('<div>')
                    .addClass('player')
                    .append(this.htmlLp, this.htmlTonearm, this.button)
            )
    }

    play () {
        this.rotate(0, 0, 'ease-in')
        this.initArm(() => {
            this.startRotation()
            this.playArm(() => {
                this.stopRotation()
                this.resetArm()
            })
        })
    }

    initArm (animationEndCb = () => '') {
        this.applyArmAnimation(
            'arm-initializing 4s linear forwards',
            animationEndCb
        )
    }

    playArm (animationEndCb = () => '') {
        this.applyArmAnimation('arm-playing 10s linear forwards', animationEndCb)
    }

    resetArm (animationEndCb = () => '') {
        this.applyArmAnimation(
            'arm-resetting 4s linear forwards',
            animationEndCb
        )
    }

    applyArmAnimation (animation, animationEndCb) {
        const currentRotation = getCurrentRotation(this.htmlTonearm)
        setOriginTarget(this.htmlTonearm, currentRotation)
        this.htmlTonearm
            .css('animation', animation)
            .on('animationend', event => {
                this.resolveArmAnimation()
                animationEndCb(event)
            })
    }
    resolveArmAnimation() {
        this.htmlTonearm.off('animationend')
        this.htmlTonearm.css('transform', `rotateZ(${getCurrentRotation(this.htmlTonearm)})`)
        this.htmlTonearm.css('animation', 'none')
    }

    setEmpty () {
        this.html.find('.player-element-lp').replaceWith(this.emptyLp)
    }

    setTrack (track) {
        this.setImage(track.image)
        this.html.find('.player-element-lp').replaceWith(this.htmlLp)
    }
}
