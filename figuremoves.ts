import { assert } from './assert'

/*
  Represents sequences of relative figure positions for rook moves.
*/
export class Moves {
    xs: number[];
    ys: number[];
    constructor(xs: number[], ys: number[]) {
        this.xs = xs;
        this.ys = ys;
    }
}

function seq18() {
    return [1,2,3,4,5,6,7,8];
}

function seq_1_8() {
    return [-1,-2,-3,-4,-5,-6,-7,-8];
}

function seq0() {
    return [0,0,0,0,0,0,0,0];
}

/*
  Sequences of relative figure positions for rook moves.
*/
export function rookMoves(): Moves[] {
    return [
        new Moves(seq18(),seq0()),
        new Moves(seq_1_8(),seq0()),
        new Moves(seq0(),seq18()),
        new Moves(seq0(),seq_1_8())
    ];
}

/*
  Sequences of relative figure positions for bishop moves.
*/
export function bishopMoves(): Moves[] {
    return [
        new Moves(seq18(),seq18()),
        new Moves(seq_1_8(),seq18()),
        new Moves(seq18(),seq18()),
        new Moves(seq_1_8(),seq_1_8())
    ];
}

/*
  Sequences of relative figure positions for queen moves.
*/
export function queenMoves(): Moves[] {
    return rookMoves().concat(bishopMoves());
}

