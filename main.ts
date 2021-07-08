input.onButtonPressed(Button.A, function () {
    steps = 0
    Pressed_B = 0
    Pressed_A = 1
})
input.onButtonPressed(Button.B, function () {
    steps = 0
    Pressed_A = 0
    Pressed_B = 1
})
input.onGesture(Gesture.Shake, function () {
    if (steps < 15 && Pressed_A == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        steps += 1
    }
    if (steps == 15 && Pressed_A == 1) {
        music.playMelody("C5 B A G F E D C ", 120)
    }
    if (steps < 20 && Pressed_B == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        steps += 1
    }
    if (steps == 20 && Pressed_B == 1) {
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
let Pressed_B = 0
let Pressed_A = 0
let steps = 0
steps = 0
Pressed_A = 0
Pressed_B = 0
basic.forever(function () {
    basic.showNumber(steps)
    basic.pause(100)
})
