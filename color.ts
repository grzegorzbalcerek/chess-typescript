import { assert } from './assert'

export type Color = 'White' | 'Black'

export function other(color: Color): Color {
    switch(color) {
    case 'White': return 'Black';
    case 'Black': return 'White';
    }
}

export function firstRow(color: Color): 1 | 8 {
    switch(color) {
    case 'White': return 1;
    case 'Black': return 8;
    }
}

assert(other('White') === 'White')
console.log(other('Black'))
console.log(firstRow('White'))
console.log(firstRow('Black'))
