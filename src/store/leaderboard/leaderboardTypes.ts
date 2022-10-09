export type ClickPayloadType = {
    team: String;
    session: String;
}

export type ClickActionType = {
    type: string;
    payload: ClickPayloadType;
};

export type LeaderboardStateType = {
    leaderboardData: LeaderboardResponseTeamType[];
    your_clicks: Number;
    session: String;
}

export type LeaderboardResponseTeamType = {
    order: Number;
    team: String;
    clicks: Number;
}
