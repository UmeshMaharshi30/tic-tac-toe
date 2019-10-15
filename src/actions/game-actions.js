import {game_constants} from './../constants'

export const game_actions = {changeGridValue};

function changeGridValue(row, col, alphabet) {
    return {
        type : game_constants.CHANGE_GRID_VALUE,
        row : row,
        col : col,
        alphabet : alphabet
    }
} 
