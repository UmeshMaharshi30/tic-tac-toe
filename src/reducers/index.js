import { combineReducers } from 'redux';
import gameState from './game-state';
import playersInformation from './players-state';

const rootReducer = combineReducers({
    gameState,
    playersInformation
});

export default rootReducer;