import { getCurrentRotation, setOriginTarget } from './util.js'

export class Lp {
    constructor (
        image = 'https://cms-assets.tutsplus.com/uploads/users/114/posts/34296/image/Final-image.jpg'
    ) {
        this.htmlLp = $(`<div class="player-element player-element-lp">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 799 799" xml:space="preserve">
                <path fill="#181819" d="M399,0C178.6,0,0,178.6,0,399s178.6,399,399,399s399-178.6,399-399S619.4,0,399,0z M399,408.8c-5.4,0-9.8-4.4-9.8-9.8s4.4-9.8,9.8-9.8s9.8,4.4,9.8,9.8S404.4,408.8,399,408.8z"/>
                <g fill="#181819" stroke="#060606" stroke-width="1.5">
                    <path d="M399,19C189.1,19,19,189.1,19,399s170.1,380,380,380s380-170.1,380-380S608.9,19,399,19z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,29C194.7,29,29,194.6,29,399s165.7,370,370,370s370-165.7,370-370S603.3,29,399,29z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,39C200.2,39,39,200.2,39,399s161.2,360,360,360s360-161.2,360-360S597.8,39,399,39z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,49C205.7,49,49,205.7,49,399s156.7,350,350,350s350-156.7,350-350S592.3,49,399,49z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,59C211.2,59,59,211.2,59,399s152.2,340,340,340s340-152.2,340-340S586.8,59,399,59z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,69C216.8,69,69,216.8,69,399s147.8,330,330,330s330-147.8,330-330S581.2,69,399,69z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,79C222.3,79,79,222.3,79,399s143.3,320,320,320s320-143.3,320-320S575.7,79,399,79z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,89C227.8,89,89,227.8,89,399s138.8,310,310,310s310-138.8,310-310S570.2,89,399,89z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,99C233.3,99,99,233.3,99,399s134.3,300,300,300s300-134.3,300-300S564.7,99,399,99z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,109c-160.2,0-290,129.8-290,290s129.8,290,290,290s290-129.8,290-290S559.2,109,399,109z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,119c-154.6,0-280,125.4-280,280s125.4,280,280,280s280-125.4,280-280S553.6,119,399,119z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,129c-149.1,0-270,120.9-270,270s120.9,270,270,270s270-120.9,270-270S548.1,129,399,129z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,139c-143.6,0-260,116.4-260,260s116.4,260,260,260s260-116.4,260-260S542.6,139,399,139z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,149c-138.1,0-250,111.9-250,250s111.9,250,250,250s250-111.9,250-250S537.1,149,399,149z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,159c-132.5,0-240,107.5-240,240s107.5,240,240,240s240-107.5,240-240S531.5,159,399,159z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,169c-127,0-230,103-230,230s103,230,230,230s230-103,230-230S526,169,399,169z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,179c-121.5,0-220,98.5-220,220s98.5,220,220,220s220-98.5,220-220S520.5,179,399,179z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,189c-116,0-210,94-210,210s94,210,210,210s210-94,210-210S515,189,399,189z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                    <path d="M399,199c-110.5,0-200,89.5-200,200s89.5,200,200,200s200-89.5,200-200S509.5,199,399,199z M398.2,413.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S406.8,413.8,398.2,413.8z"/>
                </g>
                <path id="cover" fill="#4BB749" fill-opacity="0" d="M399,261.1c-76.1,0-137.9,61.7-137.9,137.9S322.9,536.9,399,536.9S536.9,475.1,536.9,399S475.1,261.1,399,261.1z M399,410.7c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S405.4,410.7,399,410.7z"/>
                <g>
                    <clipPath id="coverClip">
                        <path d="M399,261.1c-76.1,0-137.9,61.7-137.9,137.9S322.9,536.9,399,536.9S536.9,475.1,536.9,399S475.1,261.1,399,261.1z M399,410.7c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S405.4,410.7,399,410.7z"/>
                    </clipPath>
                </g>
                <image href="${image}" x="250" y="250" height="300px" width="300px" clip-path="url(#coverClip)"></image>
            </svg>
        </div>`)
    }

    setImage (image) {
        this.htmlLp.find('image').attr('href', image)
    }

    pause () {
        this.htmlLp.css('animation-play-state', 'paused')
    }

    stop () {
        this.pause()
        this.rotate(0)
    }

    startRotation () {
        this.rotate(50, 500, 'ease-in', () => {
            this.rotateLoop()
        })
    }

    stopRotation () {
        this.rotate(50, 500, 'ease-out')
    }

    rotate (degrees, millis, easing, animationEndCb) {
        this.applyLpAnimation(
            `lp-rotating ${millis}ms ${easing} forwards`,
            degrees,
            animationEndCb
        )
    }

    rotateLoop () {
        this.applyLpAnimation('lp-playing 1818ms linear infinite forwards', 360)
    }

    applyLpAnimation (animation, targetOffset, animationEndCb = () => '') {
        const origin = getCurrentRotation(this.htmlLp)
        const target = parseFloat(origin) + targetOffset + 'deg'
        setOriginTarget(this.htmlLp, origin, target)
        this.htmlLp.css('animation', animation).on('animationend', event => {
            this.resolveLpAnimation();
            animationEndCb(event)
        })
    }

    resolveLpAnimation() {
        this.htmlLp.off('animationend')
        this.htmlLp.css('transform', `rotateZ(${getCurrentRotation(this.htmlLp)})`)
        this.htmlLp.css('animation', 'none')
    }
}
