input.onButtonPressed(Button.A, function () {
    steps = 0
})
input.onGesture(Gesture.Shake, function () {
    if (steps < 16) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        steps += 1
    }
    if (steps == 15) {
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
let steps = 0
steps = 0
basic.forever(function () {
    basic.showNumber(steps)
    basic.pause(100)
})
