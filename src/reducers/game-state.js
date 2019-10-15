import AC from './../constants/';
import {game_constants} from './../constants';


const gameStateReducer = (state = {}, action) => {
    switch(action.type) {
        case game_constants.CHANGE_GRID_VALUE:
            var grid_val_state = [],
                cols = AC.GRID_DIMS[1],
                rows = AC.GRID_DIMS[0];
            for(var i = 0; i < rows; i++) {
                grid_val_state.push([]);
                for (var j = 0; j < cols; j++ ) {
                    grid_val_state[i][j] = state[i][j]; 
                }
            }
            grid_val_state[action.row][action.col] = action.alphabet;
            return grid_val_state;
        default:
            var state_grid = [];
            cols = AC.GRID_DIMS[1];
            rows = AC.GRID_DIMS[0];
            for(var i2 = 0; i2 < rows; i2++) {
                state_grid.push([]);
                for (var j2 = 0; j2 < cols; j2++ ) {
                    state_grid[i2][j2] = state.length > 0 ? state[i2][j2] : '_'; 
                }
            }
            return state_grid;
    }
}

export default gameStateReducer;