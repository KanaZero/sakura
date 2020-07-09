import React from 'react';
import {Tab} from 'semantic-ui-react';

export function Leaderboards(){
    return (
        <div>
            <div className="justify">
                <div className="LeaderboardTop">Leaderboards</div>
            </div>
            <div className="Leaderboard">
                <Tab panes={Panes}/>
            </div>
        </div>
    )
}


const Panes = [
    {
        menuItem: 'All-Time',
        render: () => <Tab.Pane><AllTimeBoard/></Tab.Pane>,
    },
    {
        menuItem: 'Server', 
        render: () => <Tab.Pane><ServerBoard/></Tab.Pane>,
    },
]

export function AllTimeBoard(){
    return (
        <div class="LeaderboardContentBorder">
            <div class="LeaderboardContent"></div>
        </div>
    )
}

export function ServerBoard(){
    return (
        <div class="LeaderboardContentBorder">
            <div class="LeaderboardContent"></div>
        </div>
    )
}