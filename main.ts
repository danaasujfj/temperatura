input.onButtonPressed(Button.A, function () {
    serial.writeString("" + (input.temperature()))
    basic.showString("" + (input.temperature()))
    serial.writeLine("CELSIUS")
    basic.showString("CELSIUS")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() > 25) {
        basic.showString("no agafar la jaqueta")
        serial.writeString("" + (images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)))
    } else if (input.temperature() < 25) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("" + (input.temperature()))
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() < 25) {
        basic.showIcon(IconNames.Sad)
    }
})
