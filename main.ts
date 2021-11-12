function Recul (vitesse: number) {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.analogWritePin(AnalogPin.P12, vitesse)
}
input.onButtonPressed(Button.A, function () {
    if (vitesse < 1013) {
        vitesse += 10
    }
    avance(vitesse)
})
input.onButtonPressed(Button.B, function () {
    if (vitesse > 10) {
        vitesse += -10
        Recul(vitesse)
    }
})
function avance (vitesse: number) {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.analogWritePin(AnalogPin.P12, vitesse)
}
let vitesse = 0
vitesse = 0
