function gano () {
    if (posicionPersonaje[0] == meta[0] && posicionPersonaje[1] == meta[1]) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.showString("Ok")
        contDL = 0
    }
}
function menu () {
    basic.showString("menu")
    basic.showString("P1 INICIAR")
    basic.showString("P2 VER NIVELES")
}
function dibujarLaberinto (nivel: number) {
    if (nivel == 1) {
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
        for (let i = 0; i <= 4; i++) {
            for (let j = 0; j <= 4; j++) {
                if (laverinto1[i][j] == 1) {
                    led.plot(i, j)
                }
            }
        }
        if (contDL < 1) {
            posicionPersonaje = [0, 4]
        }
        contDL = contDL + 1
    }
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
    perdio(laverinto1)
    personaje(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(meta[0], meta[1], 60)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    dibujarLaberinto(nivelJugador)
    if (posicionPersonaje[1] < 5) {
        posicionPersonaje[1] = posicionPersonaje[1] + 1
    }
    perdio(laverinto1)
    personaje(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(meta[0], meta[1], 60)
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
    led.plotBrightness(meta[0], meta[1], 60)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    dibujarLaberinto(nivelJugador)
    if (posicionPersonaje[1] != 0) {
        posicionPersonaje[1] = posicionPersonaje[1] - 1
    }
    perdio(laverinto1)
    personaje(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(meta[0], meta[1], 60)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    dibujarLaberinto(nivelJugador)
    if (posicionPersonaje[0] < 5) {
        posicionPersonaje[0] = posicionPersonaje[0] + 1
    }
    perdio(laverinto1)
    personaje(posicionPersonaje[0], posicionPersonaje[1])
    gano()
    led.plotBrightness(meta[0], meta[1], 60)
})
let laverinto1: number[][] = []
let meta: number[] = []
let nivelJugador = 0
let contDL = 0
let posicionPersonajeCache: number[] = []
let posicionPersonaje: number[] = []
let k = 0
let l = 0
nivelJugador = 1
menu()
posicionPersonaje = [0, 0]
meta = [1, 0]
let puedoHacerMovimiento = 1
function delimitarMapa(pP: number[], labe: number[][]){
    if(pP[0] >4){
        perdio(labe)
    }
}

type Matrices = {
    [key: string]: number[][];
}

let matrices: Matrices  = {
    matriz1: [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ],
    matriz2: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ],
    matriz3: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0]
    ]
};

function muestraMatriz(num: number) {
    let name = 'matriz' + num
    console.log(matrices[`matriz${num}`]);
}