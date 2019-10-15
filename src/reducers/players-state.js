import {user_constants} from './../constants';

const playerInformationReducer = (state = {}, action) => {
    switch(action.type) {
        case user_constants.CHANGE_PLAYER_TURN:
            var grid_temp_state = {...state};
            grid_temp_state.player1.turn = !state.player1.turn;
            grid_temp_state.player2.turn = !state.player2.turn;
            return grid_temp_state;
        case user_constants.END_GAME:
            var end_game_state = {...state};
            end_game_state.player1.victory = !end_game_state.player1.turn;
            end_game_state.player2.victory = !end_game_state.player2.turn;
            return end_game_state;
        default: 
            var player1 = {"name" : "player1", "alphabet" : "O", "turn" : true, "victory" : false};
            var player2 = {"name" : "player2", "alphabet" : "X", "turn" : false, "victory" : false};
            var temp_state = {player1, player2};
            return state.player1 ? {...state} : temp_state;
    }
}

export default playerInformationReducer;