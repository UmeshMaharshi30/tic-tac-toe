import AC from './../constants/';


const gameStateReducer = (state = {}, action) => {
    switch(action.type) {
        default:
            var state_grid = [],
                cols = AC.GRID_DIMS[1],
                rows = AC.GRID_DIMS[0];
            for(var i = 0; i < rows; i++) {
                state_grid.push([]);
                for ( var j = 0; j < cols; j++ ) {
                    state_grid[i][j] = 0; 
                }
            }
            return state_grid;
    }
}

export default gameStateReducer;