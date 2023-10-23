const rls = require("readline-sync");

// let headRow:string[] = ['   ','|_A_|','|_B_|','|_C_|']
// let topRow:string[] = ['1: ','|___|','|___|','|___|']
// let midRow:string[] = ['2: ','|___|','|___|','|___|']
// let bottomRow:string[] = ['3: ','|___|','|___|','|___|']

let headRow:string[] = ['   ','|_A_|','|_B_|','|_C_|']
let topRow:string[] = ['1: ','|___|','|___|','|___|']
let midRow:string[] = ['2: ','|___|','|___|','|___|']
let bottomRow:string[] = ['3: ','|___|','|___|','|___|']

let m = [headRow,topRow,midRow,bottomRow]

let board:string[][] = [headRow,topRow,midRow,bottomRow]
let emptyBox:string = '|___|'
let player:string = 'PLAYER 1'
let ficha:string

let checkWin = (a:string[]) => (a[0] == a[1] && a[1] == a[2] && a[2] != emptyBox) ? true : false
let options:string[] = ['a1','b1','c1','a2','b2','c2','a3','b3','c3']

let playerWin = (m:string[][]) => {
    //Condiciones para ganar:
    const checkArrays:string[][] = [[m[1][1],m[1][2],m[1][3]],[m[2][1],m[2][2],m[2][3]],[m[3][1],m[3][2],m[3][3]],[m[1][1],m[2][1],m[3][1]],[m[1][2],m[2][2],m[3][2]],[m[1][3],m[2][3],m[3][3]],[m[1][1],m[2][2],m[3][3]],[m[3][1],m[2][2],m[1][3]]];
    let win = false;
    for (let i = 0; i<checkArrays.length && win == false; i++){
       if (checkWin(checkArrays[i])){
        win = true
       }
    }
    return win
}

let currentBox:string;
let gameEnd:boolean = false

console.log('Bienvenido al TRES EN RAYA')
console.log('Usa tu teclado para indicar dónde quieres colocar tu próxima ficha.\nLas posiciones se especifican utilizando una letra para la columna (A, B o C) y un número para la fila (1, 2 o 3).\nPor ejemplo, "A1" representa el primer recuadro del tablero.')

while (!gameEnd){
    console.log(headRow)
    console.log(topRow)
    console.log(midRow)
    console.log(bottomRow)
    do{
        currentBox = rls.question(`${player}: Elige una casilla\n`).toLowerCase()
        
    }while (options.indexOf(currentBox)<0)

    options.splice(options.indexOf(currentBox),1);

    ficha = player == 'PLAYER 1' ? '|_O_|' : '|_X_|'
    
    switch (currentBox){
        case 'a1':
            m[1][1] = ficha;
            break;
        
        case 'b1':
            m[1][2] = ficha;
            break;
        
        case 'c1':
            m[1][3] = ficha;
            break;
        case 'a2':
            m[2][1] = ficha;
            break;
        
        case 'b2':
            m[2][2] = ficha;
            break;
        
        case 'c2':
            m[2][3] = ficha;
            break;
        case 'a3':
            m[3][1] = ficha;
            break;
        
        case 'b3':
            m[3][2] = ficha;
            break;
        
        case 'c3':
            m[3][3] = ficha;
            break;
        }
    
    //ha ganado?
    if (playerWin(m)){
        console.log(`¡Enhorabuena! El jugador ${player} ha ganado la partida.`)
        gameEnd = true
    }else if (options.length == 0){
        console.log("No quedan más jugadas. Es un empate.")
        gameEnd = true;        
    }else{
       player = player == 'PLAYER 1' ? 'PLAYER 2': 'PLAYER 1'
    }
}



