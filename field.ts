import { Color, firstRow, other } from './color'

/*
  The game of chess is played on a board with 64 fields.
  The board has the shape of a square with eight rows — from 1 to 8
  — and eight columns — from `a` to `h`.
  The 'Field' represents a board field.
  It has members representing the column and the row —
  the field coordinates on the chess board.
  Valid fields have coordinates in the range between 1 and 8.
*/
export class Field {
    col: number;
    row: number;

    /*
      Construct a field
    */
    constructor(c: number, r: number) {
        this.col = c;
        this.row = r;
    }

    /*
      Shows field coordinates as a pair of characters:
      a letter representing the column and a number representing the row.
    */
    show() {
        return String.fromCharCode(96+this.col) + this.row;
    }

    /*
      Returns a new field with coordinates moved
      by the given number of rows and columns relative to the original field.
    */
    relative(col: number, row: number) {
        return new Field(this.col + col, this.row + row);
    }

    /*
      Returns a boolean value indicating
      whether the given field belongs to the last row from
      the point of view of a player.
    */
    isLastRow(color: Color) {
        return this.row === firstRow(other(color))
    }

    /*
      Returns a boolean value indicating
      whether the field has valid coordinates, that is
      whether it belongs to the board.
    */
    isValid() {
        return this.col >= 1 && this.col <= 8 && this.row >= 1 && this.row <= 8;
    }
}

/*
  Construct the Field based on its 2-character coordinates.
*/
function readField(input: String): Field {
    return new Field(
        input.toLowerCase().charCodeAt(0) - 96,
        input.charCodeAt(1) - 48);
}

import { assert } from './assert'

assert(new Field(1,1).show() === 'a1')
assert(new Field(3,4).show() === 'c4')
assert(readField('c4').col === 3)
assert(readField('c4').row === 4)
assert(readField('C4').col === 3)
assert(readField('C4').row === 4)
assert(new Field(3,4).relative(1,1).col === 4)
assert(new Field(3,4).relative(1,1).row === 5)
assert(!readField('c4').isLastRow('Black'))
assert(!readField('d8').isLastRow('Black'))
assert(readField('d8').isLastRow('White'))
assert(readField('d8').isValid())
assert(!readField('a0').isValid())
assert(!readField('i8').isValid())
assert(!readField('h9').isValid())
