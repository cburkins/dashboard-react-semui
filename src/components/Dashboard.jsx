import React from "react";
import { Container } from "semantic-ui-react";

import Test01CardGrid from "../cardgrids/Test01CardGrid";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greeting: "hi" };
    }
    render() {
        return (
            <Container style={{ margin: 20 }} fluid>
                <Test01CardGrid />
            </Container>
        );
    }
}

export default Dashboard;
