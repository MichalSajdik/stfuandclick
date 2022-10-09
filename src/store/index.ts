import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import scoreBoard from "./leaderboard/leaderboard";
import {LeaderboardStateType} from "./leaderboard/leaderboardTypes";

const reducer = combineReducers({
    scoreBoard
})
const store = configureStore({
    reducer,
})
export default store;

export type StoreType = {
    scoreBoard : LeaderboardStateType
}
