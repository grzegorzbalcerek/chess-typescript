
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

import { assert } from './assert'

assert(other('White') === 'Black')
assert(other('Black') === 'White')
assert(firstRow('White') === 1)
assert(firstRow('Black') === 8)
