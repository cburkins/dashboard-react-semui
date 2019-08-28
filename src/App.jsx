import React from "react";
import { Button, Sidebar, Menu, Segment, Icon } from "semantic-ui-react";

import Dashboard from "./components/Dashboard";
import styled from "styled-components/macro";

const AppContainerDiv = styled.div`
    text-align: center;
    background-color: red;
`;

const SidebarDiv = styled.div`
    background-color: orange;
`;

class App extends React.Component {
    state = { visible: false };

    handleHideClick = () => this.setState({ visible: false });
    handleShowClick = () => this.setState({ visible: true });
    handleSidebarHide = () => this.setState({ visible: false });

    render() {
        const { visible } = this.state;

        return (
            <AppContainerDiv>
                {/* Buttons to show/hide the sidebar */}
                <Button.Group>
                    <Button disabled={visible} onClick={this.handleShowClick}>
                        Show sidebar
                    </Button>
                    <Button disabled={!visible} onClick={this.handleHideClick}>
                        Hide sidebar
                    </Button>
                </Button.Group>

                {/* Define the sidebar itself */}
                <Sidebar.Pushable as={Segment} style={{ backgroundColor: "green" }}>
                    <SidebarDiv>
                        <Sidebar
                            as={Menu}
                            animation="overlay"
                            icon="labeled"
                            inverted
                            onHide={this.handleSidebarHide}
                            vertical
                            visible={visible}
                            width="thin">
                            <Menu.Item as="a" onClick={this.handleHideClick} color="red">
                                <Icon name="home" />
                                Homee
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="gamepad" />
                                Games
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="camera" />
                                Channels
                            </Menu.Item>
                        </Sidebar>
                        {/* Area where page content goes, and sidebar slides over this content */}
                        <Sidebar.Pusher dimmed={visible}>
                            <Dashboard />
                        </Sidebar.Pusher>
                    </SidebarDiv>
                </Sidebar.Pushable>
            </AppContainerDiv>
        );
    }
}

export default App;
