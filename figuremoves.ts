import { assert } from './assert'
import { Field } from './field'
import { Figure } from './figure'

type Move = [number,number]

/*
  Sequences of relative figure positions for rook moves.
*/
export function rookMovess(): Move[][] {
    return [
        [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0]],
        [[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0]],
        [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8]],
        [[0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8]]
    ];
}

/*
  Sequences of relative figure positions for bishop moves.
*/
export function bishopMovess(): Move[][] {
    return [
        [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]],
        [[1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6],[7,-7],[8,-8]],
        [[-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8]],
        [[-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8]]
    ];
}

/*
  Sequences of relative figure positions for queen moves.
*/
export function queenMovess(): Move[][] {
    return rookMovess().concat(bishopMovess());
}

/*
  Sequences of relative figure positions for knight moves.
*/
export function knightMovess(): Move[][] {
    return [[[1,2]],[[2,1]],[[-1,2]],[[2,-1]],[[-1,-2]],[[-2,-1]],[[1,-2]],[[-2,1]]];
}

///*
//  Sequences of relative figure positions for king moves.
//*/
//export function kingMoves(): Moves[] {
//    return queenMoves().map(moves => new Moves(moves.xs.slice(0,1), moves.ys.slice(0,1)));
//}
//
///*
//  Choose the sequences of relative figure positions
//  based on the figure position, type, color,
//  and whether the move is a capture move or not.
//*/
export function figureMovess(figure: Figure, field: Field, capture: Boolean): Move[][] {
    if (figure.figureType === 'Rook') return rookMovess();
    else if (figure.figureType === 'Bishop') return bishopMovess();
    else if (figure.figureType === 'Queen') return queenMovess();
    else if (figure.figureType === 'Knight') return knightMovess();
}

export function figureTargetss(figure: Figure, field: Field, capture: Boolean): Field[][] {
    return figureMovess(figure, field, capture).map(moves => field.relativeFields(moves).filter(target => target.isValid()));
}

function showFieldss(fieldss: Field[][]): String[][] {
    return fieldss.map(targets => targets.map(target => target.show()));
}

assert(showFieldss(figureTargetss(new Figure('Rook','White'), new Field(3,4), false)).toString() ===
       [
           ['d4','e4','f4','g4','h4'],
           ['b4','a4'],
           ['c5','c6','c7','c8'],
           ['c3','c2','c1']
       ].toString())

assert(showFieldss(figureTargetss(new Figure('Bishop','White'), new Field(2,2), false)).toString() ===
       [
           ['c3','d4','e5','f6','g7','h8'],
           ['c1'],
           ['a3'],
           ['a1']
       ].toString())

assert(showFieldss(figureTargetss(new Figure('Queen','Black'), new Field(2,2), false)).toString() ===
            [
                [ 'c2', 'd2', 'e2', 'f2', 'g2', 'h2' ],
                [ 'a2' ],
                [ 'b3', 'b4', 'b5', 'b6', 'b7', 'b8' ],
                [ 'b1' ],
                [ 'c3', 'd4', 'e5', 'f6', 'g7', 'h8' ],
                [ 'c1' ],
                [ 'a3' ],
                [ 'a1' ]
            ].toString())
