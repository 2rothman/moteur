def Inc(num: number):
    return num + 1
nombre = 0

def on_forever():
    Inc(nombre)
    basic.show_string("" + str((nombre)))
    basic.pause(1000)
basic.forever(on_forever)
