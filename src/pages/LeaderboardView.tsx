import {useSelector} from "react-redux";
import {Button, TextField, Box} from '@mui/material';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {StoreType} from "../store";
import Leaderboard from "../components/Leaderboard";

export default function LeaderboardView() {
    const {leaderboardData} = useSelector((state: StoreType) => state.scoreBoard);
    const [team, setTeam] = useState("")
    const navigate = useNavigate();

    return <Box
        sx={{display: 'flex', flexWrap: 'wrap', alignContent: 'center', padding: '8px', flexDirection: 'column'}}>
        <Box
            sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '8px'}}
        >
            <TextField id="outlined-basic" label="Team name" variant="outlined"
                       onChange={(e) => setTeam(e.target.value)}/>
            <Button variant="contained" onClick={() => navigate(team)}>Click</Button>
        </Box>

        <Leaderboard leaderboardData={leaderboardData}/>
    </Box>
}
