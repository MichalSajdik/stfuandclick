import {useSelector} from "react-redux";
import store, {StoreType} from "../store";
import {Box, Button} from "@mui/material";
import Leaderboard from "../components/Leaderboard";
import {useParams} from "react-router-dom";
import {click} from "../store/leaderboard/leaderboard";
import {Column} from "../atoms/Column";
import {LeaderboardResponseTeamType} from "../store/leaderboard/leaderboardTypes";

export default function LeaderboardTeamClick() {
    const {leaderboardData, your_clicks, session} = useSelector((state: StoreType) => state.scoreBoard);
    const {team} = useParams();
    const teamName = team ? team : "";

    const currentTeam = leaderboardData.find((data: LeaderboardResponseTeamType) => data.team === teamName);
    const teamClicks = currentTeam ? currentTeam.clicks.toString() : "0";

    return <Box
        sx={{display: 'flex', flexWrap: 'wrap', alignContent: 'center', padding: '8px', flexDirection: 'column'}}>
        <Box
            sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '8px'}}
        >
            <Button variant="contained"
                    onClick={() => store.dispatch(click({team: teamName, session: session}))}>Click</Button>
        </Box>
        <Box
            sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '8px'}}>
            <Column><>Your clicks: {your_clicks}</>
            </Column>
            <Column><>Team clicks: {teamClicks}</>
            </Column>
        </Box>

        <Leaderboard leaderboardData={leaderboardData}/>
    </Box>
}

