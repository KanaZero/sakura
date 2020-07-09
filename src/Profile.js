import React from 'react';
import { Progress, Grid, Tab} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import sakura from "./sakura.jpg";

export function Profile(){
    return (
        <div> 
            <div class="flex justify" id="top">
                <User/>
                <Stats/>
            </div>
            <div class="flexcol justify containermargin" id="bottom">
                <Tabs/>
            </div>
        </div>
    )
}

const Panes = [
    {
        menuItem: 'Background',
        render: () => <Tab.Pane><Backgrounds/></Tab.Pane>,
    },
    {
        menuItem: 'Pins', 
        render: () => <Tab.Pane><Pins/></Tab.Pane>,
    },
    {
        menuItem: 'Description',
        render: () => <Tab.Pane><Description/></Tab.Pane>,
    },
    {
        menuItem: 'Stickers',
        render: () => <Tab.Pane><Stickers/></Tab.Pane>,
    },
]

export function Tabs(){
    return (
        <div class="flex justify">
            <Tab panes={Panes}/>
        </div>
    )
}


export function Stats(){
    return (
        <div class="right black containermargin" id="topright">
        <div class="flex justify">
            <div class="bartitle">Backgrounds</div>
            <div class="bar">
                <Progress percent={32} inverted color='red' progress />
            </div>
        </div>
        <div class="flex justify">
            <div class="bartitle">Pins</div>
            <div class="bar">
                <Progress percent={54} inverted color='orange' progress />
            </div>
        </div>
        <div class="flex justify">
            <div class="bartitle">Stickers</div>
            <div class="bar">
                <Progress percent={88} inverted color='blue' progress />
            </div>
        </div>
        </div>
    )
}


export function Card(){
    return (
        <div> 
        </div>
    )
}

export function User(){
    return (
        <div class="left black containermargin" id="topleft">
            <img class="profileImg" src={sakura} alt="Profile"/>
            <div class="profileCenter">
                <div class="profileInfo">Username</div>
                <div class="profileInfo">Level XX</div>
                <div class="profileInfo">XXXX until next level</div>
                <div class="profileInfo">Rank: #XX.XX</div>
                <div class="profileInfo">Saku: #XX.XX</div>
                <div class="profileInfo">Rep: XXX</div>
            </div>
        </div>
    )
}

export function Stickers(){
    return (
        <div class="justify bottom black"></div>
    )
}

export function Description(){
    return (
        <div class="justify bottom black"></div>
    )
}

export function Backgrounds(){
    return (
        <div class="justify bottom black">
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img class="bgImg" src={sakura} alt="background"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )

}

export function Pins(){
    return (
        <div class="justify bottom black"></div>
    )
}