import {Box} from "@mui/material";
import {LeaderboardResponseTeamType} from "../store/leaderboard/leaderboardTypes";
import {Key} from "react";
import {Column} from "../atoms/Column";

type LeaderboardPropsType = {
    leaderboardData: LeaderboardResponseTeamType[],
}

export default function Leaderboard({leaderboardData}: LeaderboardPropsType) {
    return <>
        <Box
            sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '8px'}}>
            <Column>Team</Column>
            <Column>Clicks</Column>
        </Box>
        {
            leaderboardData?.map((team: LeaderboardResponseTeamType) => {
                return <Box key={(team.order as Key)}
                            sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '8px'}}>
                    <Column>{team.order.toString() + ". " + team.team}</Column>
                    <Column>{team.clicks.toString()}</Column>
                </Box>

            })
        }
    </>
}
