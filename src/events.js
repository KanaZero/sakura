import React from 'react';
import {Tab} from 'semantic-ui-react';

export function Events(){
    return (
        <div>
            <div className="justify">
                <div className="EventTop">EVENTS</div>
            </div>
            <div>
                <Event/>
            </div>
        </div>
    )
}

const Panes = [
    {
        menuItem: 'Title',
        render: () => <Tab.Pane><Content/></Tab.Pane>,
    },
]

export function Event(){
    return (
        <div class="justify">
            <Tab panes={Panes}/>
        </div>
    )
}

export function Content(){
    return (
        <div class="EventContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
    )
}

/*
export function Events(){
    return (
        <div>
            <div className="justify">
                <div className="EventTop">EVENTS</div>
            </div>
            <div className="justifyCol">
                <div className="EventTitleOuter">
                    <div className="EventTitleInner">
                        <div className="EventTitleText">Title</div>
                    </div>
                </div>
                <div className="EventContent">Content</div>
            </div>
        </div>
    )
}
*/