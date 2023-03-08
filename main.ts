function noMoverPersonaje () {
    console.log("ingreso noMP")
for (let k = 0; k <= 4; k++) {
        for (let l = 0; l <= 4; l++) {
            console.log("recorido cordenadas i" + k + " j" + l + "valor leberinto " + laverinto1[k][l] + " movimiento personaje " + posicionPersonaje[0] + " " + posicionPersonaje[1])
if (laverinto1[k][l] == 1) {
                if (posicionPersonaje[0] == k && posicionPersonaje[1] == l) {
                    noMoverPersonajeA = 0
                }
            }
        }
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    dibujarLaberinto(1)
if (posicionPersonaje[1] != 0) {
        posicionPersonaje[1] = posicionPersonaje[1] - 1
    }
    noMoverPersonaje()
    if (noMoverPersonajeA == 0) {
        posicionPersonaje[1] = posicionPersonaje[1] + 1
        music.playMelody(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 300, SoundExpressionEffect.Warble, InterpolationCurve.Linear), 120)
    }
    personaje(posicionPersonaje[0], posicionPersonaje[1])
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    dibujarLaberinto(1)
if (posicionPersonaje[0] != 0) {
        posicionPersonaje[0] = posicionPersonaje[0] - 1
    }
    personaje(posicionPersonaje[0], posicionPersonaje[1])
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.clearScreen()
    dibujarLaberinto(1)
if (posicionPersonaje[1] != 4) {
        posicionPersonaje[1] = posicionPersonaje[1] + 1
    }
    personaje(posicionPersonaje[0], posicionPersonaje[1])
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    dibujarLaberinto(1)
if (posicionPersonaje[0] != 4) {
        posicionPersonaje[0] = posicionPersonaje[0] + 1
    }
    personaje(posicionPersonaje[0], posicionPersonaje[1])
})
let noMoverPersonajeA = 0
let posicionPersonajeCache: number[] = []
let laverinto1: number[][] = []
let posicionPersonaje: number[] = []
music.setVolume(255)
posicionPersonaje = [0, 4]
function personaje(x: any, y: any) {
    led.plot(x, y)
}
laverinto1 = [
[
1,
1,
0,
0,
0
],
[
0,
1,
0,
1,
1
],
[
0,
1,
0,
0,
0
],
[
0,
0,
1,
1,
0
],
[
1,
0,
0,
0,
0
]
]
function dibujarLaberinto(laberinto: any) {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (laverinto1[i][j] == 1) {
                led.plot(i, j)
            }
        }
    }
}
dibujarLaberinto(1)
led.plot(posicionPersonaje[0], posicionPersonaje[1])
let puedoHacerMovimiento = 1
noMoverPersonajeA = 1
basic.forever(function () {
	
})
