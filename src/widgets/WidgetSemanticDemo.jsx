import React from "react";
import { Header, List, Divider, Item } from "semantic-ui-react";

// import styled from "styled-components";
import PropTypes from "prop-types";
import DashboardDataCard from "../components/DashboardDataCard";
import ExampleButton from "../components/exampleButton";
import ExampleModal from "../components/exampleModal";

class SemanticDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greeting: "Hola" };
    }
    render() {
        return (
            <DashboardDataCard position={this.props.position} widgetName="SemanticDemo">
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
            </DashboardDataCard>
        );
    }
}

SemanticDemo.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export default SemanticDemo;
