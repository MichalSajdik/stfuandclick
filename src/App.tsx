import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Provider} from 'react-redux';

import LeaderboardView from "./pages/LeaderboardView";
import LeaderboardTeamClick from "./pages/LeaderboardTeamClick";
import store from "./store";
import {fetchLeaderboard} from "./store/leaderboard/leaderboard";

store.dispatch(fetchLeaderboard())


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LeaderboardView/>}/>
                        <Route path="/:team" element={<LeaderboardTeamClick/>}/>
                        <Route path="*" element={<LeaderboardView/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
