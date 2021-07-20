/*
  The 'Color' type represents one of the two colors ('Black' or 'White')
  used in the game of Chess.
*/
export type Color = 'White' | 'Black'

/*
  The 'other' method returns the opposite color.
*/
export function other(color: Color): Color {
    switch(color) {
    case 'White': return 'Black';
    case 'Black': return 'White';
    }
}

/*
  The 'firstRow' method returns the coordinate of the first row
  from the point of view of a player who plays the given color.
*/
export function firstRow(color: Color): 1 | 8 {
    switch(color) {
    case 'White': return 1;
    case 'Black': return 8;
    }
}

import { assert } from './assert'

assert(other('White') === 'Black')
assert(other('Black') === 'White')
assert(firstRow('White') === 1)
assert(firstRow('Black') === 8)
