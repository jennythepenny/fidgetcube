let direction = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.EigthNote)
    music.setVolume(100)
    music.playTone(587, music.beat(BeatFraction.Eighth))
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.QuarterNote)
    music.setVolume(100)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    direction = randint(1, 8)
    if (direction == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (direction == 2) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (direction == 3) {
        basic.showArrow(ArrowNames.East)
    } else if (direction == 4) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (direction == 5) {
        basic.showArrow(ArrowNames.South)
    } else if (direction == 6) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (direction == 7) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
