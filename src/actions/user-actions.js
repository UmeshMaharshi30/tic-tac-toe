import {user_constants} from './../constants/index';

function changePlayerTurn() {
    return {
        type : user_constants.CHANGE_PLAYER_TURN
    }
}

function endGame() {
    return {
        type : user_constants.END_GAME
    }
}

export const user_actions = {changePlayerTurn, endGame};