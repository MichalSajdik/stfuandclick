import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {Dispatch} from "react";
import {ClickActionType, ClickPayloadType} from "./leaderboardTypes";
import {API_CLICK, API_LEADERBOARD} from "./leaderboardConstants";

// Slice
const slice = createSlice({
    name: 'leaderboard',
    initialState: {
        leaderboardData: [],
        your_clicks: 0,
        session: Math.random().toString()
    },
    reducers: {
        clickSuccess: (state, action) => {
            state.leaderboardData = action.payload.leaderboardData;
            state.your_clicks = action.payload.your_clicks;
            return state
        },
        fetchLeaderboardSuccess: (state, action) => {
            state.leaderboardData = action.payload.leaderboardData;
            return state
        }
    },
});
export default slice.reducer

// Actions
const {clickSuccess, fetchLeaderboardSuccess} = slice.actions
export const click = ({team, session}: ClickPayloadType) => async (dispatch: Dispatch<ClickActionType>) => {
    try {
        const your_clicks = (await axios.post(API_CLICK, {team, session})).data.your_clicks
        const leaderboardData = (await axios.get(API_LEADERBOARD)).data
        dispatch(clickSuccess({leaderboardData: leaderboardData, your_clicks: your_clicks}));
    } catch (e) {
        if (e instanceof Error) return console.error(e.message);
    }
}

export const fetchLeaderboard = () => async (dispatch: Dispatch<ClickActionType>) => {
    try {
        const res = await axios.get(API_LEADERBOARD)
        dispatch(fetchLeaderboardSuccess({leaderboardData: res.data}));
    } catch (e) {
        if (e instanceof Error) return console.error(e.message);
    }
}


