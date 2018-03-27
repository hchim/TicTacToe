//action creators

import {MOVE} from './actionTypes'

/*
 * Action Creators.
 */

export const moveStep = (row, col) => ({
    type: MOVE,
    row: row,
    col: col
})