import { getResultById } from '../store/music.store.js'
import { Lp } from './Lp.js'
import { getCurrentRotation, setOriginTarget } from './util.js'

export class Vinyl extends Lp {
    constructor (track) {
        super(track.artworkUrl100)
        this.htmlTonearm = $(`<div class="player-element player-element-tonearm">
            <svg version="1.1" viewBox="-340 -230 800 800" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><defs><filter id="filter5231" color-interpolation-filters="sRGB"><feGaussianBlur result="result1" stdDeviation="3"/><feBlend in="result1" in2="result1" mode="multiply" result="result5"/><feGaussianBlur in="result5" result="result6" stdDeviation="1"/><feComposite in="result6" in2="result5" operator="xor" result="result8"/><feComposite in="result6" in2="result8" operator="xor" result="fbSourceGraphic"/><feSpecularLighting lighting-color="rgb(255,255,255)" in="fbSourceGraphic" result="result1" specularConstant="2.2" specularExponent="55" surfaceScale="2"><fePointLight x="-5000" y="-10000" z="20000"/></feSpecularLighting><feComposite in="result1" in2="fbSourceGraphic" operator="in" result="result2"/><feComposite in="fbSourceGraphic" in2="result2" k2="2" k3="1" operator="arithmetic" result="result4"/><feComposite in="result4" in2="result4" operator="in" result="result91"/><feBlend in2="result91" mode="darken"/></filter><filter id="filter5259" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" result="result0" stdDeviation="2.3"/><feMorphology in="SourceAlpha" radius="6.6" result="result1"/><feGaussianBlur in="result1" stdDeviation="8.9"/><feColorMatrix result="result91" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.3 0"/><feComposite in="result0" in2="result91" operator="out" result="result2"/><feGaussianBlur result="result4" stdDeviation="1.7"/><feDiffuseLighting surfaceScale="10"><feDistantLight azimuth="225" elevation="45"/></feDiffuseLighting><feBlend in2="SourceGraphic" mode="multiply"/><feComposite in2="SourceAlpha" operator="in" result="result3"/><feSpecularLighting in="result4" specularExponent="17.9" surfaceScale="5"><feDistantLight azimuth="225" elevation="45"/></feSpecularLighting><feComposite in2="result3" operator="atop"/></filter><filter id="filter5293" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceGraphic" result="result6" stdDeviation="10"/><feComposite in="result6" in2="SourceGraphic" operator="xor"/><feGaussianBlur result="result2" stdDeviation="10"/><feComposite in2="SourceGraphic" operator="atop" result="result91"/><feComposite in="result2" in2="result91" operator="xor" result="result4"/><feGaussianBlur in="result4" result="result3" stdDeviation="5"/><feSpecularLighting lighting-color="rgb(255,255,255)" in="result3" result="result5" specularConstant="3" specularExponent="35" surfaceScale="12"><feDistantLight azimuth="235" elevation="45"/></feSpecularLighting><feComposite in="SourceGraphic" in2="result5" k2="0.8" k3="0.7" operator="arithmetic" result="result7"/><feComposite in="result7" in2="SourceGraphic" operator="in"/></filter><filter id="filter5429" color-interpolation-filters="sRGB"><feMorphology in="SourceAlpha" radius="4.3" result="result91"/><feComposite in="SourceGraphic" in2="result91" operator="out"/><feGaussianBlur result="result0" stdDeviation="1.2"/><feDiffuseLighting><feDistantLight azimuth="225" elevation="66"/></feDiffuseLighting><feBlend in2="SourceGraphic" mode="multiply"/><feComposite in2="SourceAlpha" operator="in"/></filter></defs>
                    <path d="m24.4 521.9 11.9 6.2s37.1-91.5 42.4-123.7c2.7-16.4-1.1-103.9-1.1-103.9v-232.7h-14.7l-0.1 232.7s3.7 87.5 1.1 103.9c-5 30.5-39.5 117.5-39.5 117.5z" fill="#C1C1C5" filter="url(#filter5429)"/><g fill="#5b5b5f">
                    <rect x="49.6" width="40.7" height="67.8" filter="url(#filter5231)"/>
                    <circle cx="69.9" cy="160.3" r="22.6" filter="url(#filter5259)"/>
                    <path d="m22.9 499.2 18.3-22.9 13.2 6.4-6.2 28.7-22.8 47.1s-1.2 3.3-15.4-3.6c-11.2-5.4-10-8.7-10-8.7l22.9-47z" filter="url(#filter5293)"/>
                </g>
            </svg>
        </div>`)
        this.lpBase = $(`<div class="player-element player-element-lpbase">
            <svg version="1.1" viewBox="0 0 799 799" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><defs><filter id="filter2302" style="color-interpolation-filters:sRGB"><feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="6"/><feSpecularLighting lighting-color="rgb(255,255,255)" in="blur" result="specular" specularExponent="25" surfaceScale="10"><feDistantLight azimuth="235" elevation="45"/></feSpecularLighting><feComposite in="specular" in2="SourceGraphic" k2="1" k3="1" operator="arithmetic" result="composite1"/><feComposite in="composite1" in2="SourceAlpha" operator="in" result="composite2"/></filter><filter id="filter3183" style="color-interpolation-filters:sRGB"><feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="3.71257"/><feSpecularLighting lighting-color="rgb(255,255,255)" in="blur" result="specular" specularConstant="0.553892" specularExponent="25" surfaceScale="10"><feDistantLight azimuth="39" elevation="50"/></feSpecularLighting><feComposite in="specular" in2="SourceGraphic" k2="1" k3="1" operator="arithmetic" result="composite1"/><feComposite in="composite1" in2="SourceAlpha" operator="in" result="composite2"/></filter></defs>
                <path d="m399 0c-220.4 0-399 178.6-399 399s178.6 399 399 399 399-178.6 399-399-178.6-399-399-399zm0 408.8c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.8-9.8 9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8z" fill="#181819" style="filter:url(#filter2302)"/>
                <g transform="matrix(.77917 0 0 .77917 88.109 88.109)" fill="#181819" stroke="#060606" stroke-width="1.9252">
                    <path d="m399 199c-110.5 0-200 89.5-200 200s89.5 200 200 200 200-89.5 200-200-89.5-200-200-200zm-0.8 214.8c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5z" style="filter:url(#filter3183);stroke-width:.12834"/>
                </g>
            </svg>
        </div>`)
        this.playButton = $(`        
        <div class="player-button player-button-play">
            <svg class="play" x="0px" y="0px" viewBox="0 0 10 12" xml:space="preserve">
                <path d="M10,6c0,0.3-0.3,0.5-0.3,0.5l-8.6,5.3C0.5,12.2,0,11.9,0,11.1V0.9c0-0.8,0.5-1.1,1.1-0.7l8.6,5.3C9.7,5.5,10,5.7,10,6z"/>
            </svg>
        </div>`)
        this.pauseButton = $(`        
        <div class="player-button player-button-pause">
            <svg class="pause" x="0px" y="0px" viewBox="0 0 12 14" xml:space="preserve">
                <path d="M11,0H9C8.4,0,8,0,8,0.6v12.8C8,14,8.4,14,9,14h2c0.6,0,1,0,1-0.6V0.6C12,0,11.6,0,11,0z M3,0H1C0.4,0,0,0,0,0.6v12.8C0,14,0.4,14,1,14h2c0.6,0,1,0,1-0.6V0.6C4,0,3.6,0,3,0z"/>
            </svg>
        </div>`)
        this.stopButton = $(`        
        <div class="player-button player-button-stop">
            <svg class="stop" x="0px" y="0px" viewBox="0 0 12 12" xml:space="preserve">
                <path d="M12,1v9.8c0,0.7-0.5,1.2-1.2,1.2H1c-0.6,0-1-0.4-1-1V1.2C0,0.5,0.5,0,1.2,0H11C11.6,0,12,0.4,12,1z"/>
            </svg>
        </div>`)
        this.buttons = $('<div class="player-buttons"></div>').append(
            this.playButton.on('click', () => this.play()),
            this.pauseButton.on('click', () => this.pause()),
            this.stopButton.on('click', () => this.stop())
        )

        this.html = $('<div>')
            .addClass('player-container wood')
            .append(
                $('<div>')
                    .addClass('player')
                    .append(
                        this.lpBase.droppable({
                            accept: '.vinyl',
                            drop: (event, ui) => {
                                const track = getResultById(
                                    ui.helper.data('id')
                                )
                                this.setImage(track.cover)
                                this.htmlLp.removeClass('hidden')
                                this.setAudioTrack(track.audioSample)
                                this.millisDuration = 30000
                                this.play()
                            },
                            over: function (event, ui) {
                                ui.helper.animate(
                                    {
                                        opacity: 1,
                                    },
                                    200
                                )
                            },
                            out: function (event, ui) {
                                ui.helper.animate(
                                    {
                                        opacity: 0.4,
                                    },
                                    200
                                )
                            },
                        }),
                        this.htmlLp.addClass('hidden'),
                        this.htmlTonearm,
                        this.buttons
                    )
            )
            .draggable()

        this.audio = $('<audio>')
            .attr('crossorigin', 'anonymous')
            .append(
                $('<source>')
                    .attr('type', 'audio/x-m4a')
                    .attr(
                        'src',
                        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/79/44/86/79448607-0518-0bbe-692e-35ce72e7c4a1/mzaf_7521654542653480071.plus.aac.p.m4a'
                    )
            )
            .appendTo(this.html)

        const AudioContext = window.AudioContext || window.webkitAudioContext
        this.audioCtx = new AudioContext()
        this.audioTrack = this.audioCtx.createMediaElementSource(this.audio[0])
        this.gainNode = this.audioCtx.createGain()
        const pannerOptions = { pan: 0 }
        this.panner = new StereoPannerNode(this.audioCtx, pannerOptions)
        this.audioTrack
            .connect(this.gainNode)
            .connect(this.panner)
            .connect(this.audioCtx.destination)

        this.millisDuration = 0

        this.states = {
            paused: 'paused',
            playing: 'playing',
            stopped: 'stopped',
        }

        this.currentState = this.states.stopped
    }

    setAudioTrack (audioTrack) {
        this.audio.find('source').attr('src', audioTrack)
        this.audio[0].load()
    }

    play () {
        if (this.paused) {
            this.resume()
            return
        }
        this.audio[0].pause()
        this.resolveArmAnimation()
        this.resolveLpAnimation()
        this.rotate(0, 0, 'ease-in')
        this.initArm(() => {
            this.startRotation()
            this.audio[0].play()
            this.playArm(() => {
                this.stopRotation()
                this.resetArm()
            }, this.millisDuration)
        })
    }

    pause () {
        this.audio[0].pause()
        this.resolveArmAnimation()
        this.resolveLpAnimation()
        this.stopRotation()
        this.paused = true
    }

    resume () {
        this.startRotation()
        this.audio[0].play()
        this.playArm(() => {
            this.stopRotation()
            this.resetArm()
        }, this.audio[0].currentTime * 1000 - this.millisDuration)
    }

    stop () {
        this.audio[0].pause()
        this.audio[0].currentTime = 0
        this.htmlLp.off('animationend')
        this.htmlTonearm.off('animationend')
        this.stopRotation()
        this.resetArm()
    }

    initArm (animationEndCb = () => '') {
        this.applyArmAnimation(
            'arm-initializing 4s linear forwards',
            animationEndCb
        )
    }

    playArm (animationEndCb = () => '', millis) {
        this.applyArmAnimation(
            `arm-playing ${millis}ms linear forwards`,
            animationEndCb
        )
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
    resolveArmAnimation () {
        this.htmlTonearm.off('animationend')
        this.htmlTonearm.css(
            'transform',
            `rotateZ(${getCurrentRotation(this.htmlTonearm)})`
        )
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
