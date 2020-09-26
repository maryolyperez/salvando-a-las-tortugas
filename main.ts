basic.forever(function () {
    while (input.temperature() < 26) {
        basic.showString("TB")
        music.playTone(262, music.beat(BeatFraction.Double))
    }
    while (input.temperature() > 34) {
        basic.showString("TA")
        music.playTone(988, music.beat(BeatFraction.Double))
    }
    basic.showIcon(IconNames.Yes)
})
