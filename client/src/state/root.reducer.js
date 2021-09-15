import { combineReducers } from "redux";
import player_slice from './slices/player.slice'

const rootReducer = combineReducers({
  me: player_slice
});

export default rootReducer;
