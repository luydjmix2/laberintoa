function gano () {
    if (posicionPersonaje[0] == ganadore[`meta${nivelJugador}`][0] && posicionPersonaje[1] == ganadore[`meta${nivelJugador}`][1]) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.showString("Ok")
        contDL = 0
        if (nivelJugador < niveles){
            nivelJugador = nivelJugador+1
        }
    }
}
function menu () {
    basic.showString("menu")
    basic.showString("P1 INICIAR")
    basic.showString("P2 VER NIVELES")
}

function perdio (labe: number[][]) {
    for (let m = 0; m <= 4; m++) {
        for (let n = 0; n <= 4; n++) {
            if (labe[m][n] == 1) {
                if (posicionPersonaje[0] == m && posicionPersonaje[1] == n) {
                    basic.clearScreen()
                    basic.showIcon(IconNames.Sad)
                    basic.showString("Game Over")
                    contDL = 0
                }
            }
        }
    }
}
function personaje (x: number, y: number) {
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    dibujarLaberinto(nivelJugador)
    if (posicionPersonaje[0] != 0) {
        posicionPersonaje[0] = posicionPersonaje[0] - 1
    }
    perdio(matrices[`matriz${nivelJugador}`])
    personaje(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(ganadore[`meta${nivelJugador}`][0], ganadore[`meta${nivelJugador}`][1], 60)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    dibujarLaberinto(nivelJugador)
    if (posicionPersonaje[1] < 5) {
        posicionPersonaje[1] = posicionPersonaje[1] + 1
    }
    perdio(matrices[`matriz${nivelJugador}`])
    personaje(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(ganadore[`meta${nivelJugador}`][0], ganadore[`meta${nivelJugador}`][1], 60)
})
input.onPinPressed(TouchPin.P2, function () {
    led.stopAnimation()
    basic.clearScreen()
    led.stopAnimation()
    basic.clearScreen()
    led.stopAnimation()
    basic.clearScreen()
    dibujarLaberinto(nivelJugador)
    led.plot(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(ganadore[`meta${nivelJugador}`][0], ganadore[`meta${nivelJugador}`][1], 60)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    dibujarLaberinto(nivelJugador)
    if (posicionPersonaje[1] != 0) {
        posicionPersonaje[1] = posicionPersonaje[1] - 1
    }
    perdio(matrices[`matriz${nivelJugador}`])
    personaje(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(ganadore[`meta${nivelJugador}`][0], ganadore[`meta${nivelJugador}`][1], 60)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    dibujarLaberinto(nivelJugador)
    if (posicionPersonaje[0] < 5) {
        posicionPersonaje[0] = posicionPersonaje[0] + 1
    }
    perdio(matrices[`matriz${nivelJugador}`])
    personaje(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(ganadore[`meta${nivelJugador}`][0], ganadore[`meta${nivelJugador}`][1], 60)
})
let laverinto1: number[][] = []
let nivelJugador = 0
let contDL = 0
let posicionPersonajeCache: number[] = []
let posicionPersonaje: number[] = []
let k = 0
let l = 0
let niveles = 3
nivelJugador = 1
menu()
posicionPersonaje = [0, 0]
let puedoHacerMovimiento = 1
function delimitarMapa(pP: number[], labe: number[][]){
    if(pP[0] >4){
        perdio(labe)
    }
}

type Matrices2 = {
    [key: string]: number[][];
}
type Matrices1 = {
    [key: string]: number[];
}

let ganadore: Matrices1 = {
    meta1: [1, 0],
    meta2: [1, 0],
    meta3: [1, 0]
}

let inicioPersonajeN: Matrices1 = {
    inicioPersonajeN1: [0, 4],
    inicioPersonajeN2: [1, 0],
    inicioPersonajeN3: [1, 0]
}

let matrices: Matrices2  = {
    matriz1: [
        [1, 1, 0, 0, 0],
        [0, 1, 0, 1, 1],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [1, 0, 0, 0, 0]
    ],
    matriz2: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ],
    matriz3: [
        [0, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 0, 0, 0]
    ]
};

function dibujarLaberinto(num: number) {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (matrices[`matriz${num}`][i][j] == 1) {
                led.plot(i, j)
            }
        }
    }
    if (contDL < 1) {
        posicionPersonaje = inicioPersonajeN[`inicioPersonajeN${nivelJugador}`]
    }
    contDL = contDL + 1
}