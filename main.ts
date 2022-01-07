function Recul (vitesse: number) {
	
}
function avance (vitesse: number) {
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P0, vitesse)
}
let vitesse = 0
pins.analogWritePin(AnalogPin.P0, vitesse)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 1)
basic.pause(200)
while (vitesse < 500) {
    vitesse += 10
    pins.analogWritePin(AnalogPin.P0, vitesse)
    basic.pause(200)
}
while (vitesse > 20) {
    vitesse += -10
    pins.analogWritePin(AnalogPin.P0, vitesse)
    basic.pause(200)
}
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 0)
while (vitesse < 500) {
    vitesse += 10
    pins.analogWritePin(AnalogPin.P0, vitesse)
    basic.pause(200)
}
while (vitesse > 11) {
    vitesse += -10
    pins.analogWritePin(AnalogPin.P0, vitesse)
    basic.pause(200)
}
