import React from "react";
import { Container, Header, List, Divider, Item } from "semantic-ui-react";
import ExampleButton from "./exampleButton";
import ExampleModal from "./exampleModal";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greeting: "hi" };
    }
    render() {
        return (
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
        );
    }
}

export default Dashboard;
