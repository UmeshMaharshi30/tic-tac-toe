const playerInformationReducer = (state = {}, action) => {
    switch(action.type) {
        default: 
            var player1 = {"name" : "player1", "alphabet" : "O", "turn" : true};
            var player2 = {"name" : "player2", "alphabet" : "X", "turn" : false};
            var temp_state = {player1, player2};
            return temp_state;
    }
}

export default playerInformationReducer;