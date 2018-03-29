import React from 'react';
import { Page, Toolbar, Card, ToolbarButton,Icon } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import '../index.css';
import UpdateStatus from '../containers/UpdateStatus';
import MoveOnBoard from '../containers/MoveOnBoard';

const App = () => {
    let renderToolbar = () => (
        <Toolbar>
            <div className="center">TicTacToe</div>
            <div className="right">
                <ToolbarButton>
                    <Icon icon='ion-navicon, material:md-menu'></Icon>
                </ToolbarButton>
            </div>
        </Toolbar>
    )

    return (
        <Page renderToolbar={renderToolbar}>
            <Card>
                <MoveOnBoard />
                <UpdateStatus />
            </Card>
        </Page>
    )
}

export default App