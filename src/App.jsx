import React from "react";
import "./App.css";
import { Container, Header, List, Divider, Item, Button, Sidebar, Menu, Segment, Icon, Image } from "semantic-ui-react";

import ExampleButton from "./exampleButton";
import ExampleModal from "./exampleModal";

class App extends React.Component {
    state = { visible: false };

    handleHideClick = () => this.setState({ visible: false });
    handleShowClick = () => this.setState({ visible: true });
    handleSidebarHide = () => this.setState({ visible: false });

    render() {
        const { visible } = this.state;

        return (
            <div className="App">
                <Button.Group>
                    <Button disabled={visible} onClick={this.handleShowClick}>
                        Show sidebar
                    </Button>
                    <Button disabled={!visible} onClick={this.handleHideClick}>
                        Hide sidebar
                    </Button>
                </Button.Group>

                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        icon="labeled"
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width="thin">
                        <Menu.Item as="a">
                            <Icon name="home" />
                            Home
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

                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as="h3">Application Content</Header>
                            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>

                <Container style={{ margin: 20 }}>
                    <Header as="h2">This example is powered by Semantic UI React</Header>
                    <ExampleButton />
                    <Divider hidden />
                    <ExampleModal />
                    <Divider hidden />
                    <List ordered>
                        <List.Item as="a">First item</List.Item>
                        <List.Item as="a">Second item</List.Item>
                        <List.Item as="a">Third item</List.Item>
                        <List.Item as="a">Fourth item</List.Item>
                        <List.Item href="http://www.google.com" target="_blank">
                            Go To Google
                        </List.Item>
                    </List>
                    <Divider />
                    <Item href="http://www.google.com" target="_blank">
                        Go To Google
                    </Item>
                </Container>
            </div>
        );
    }
}

export default App;
