let direction = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    direction = randint(1, 4)
    if (direction == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (direction == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (direction == 3) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
