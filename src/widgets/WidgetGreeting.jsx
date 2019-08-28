import React from "react";
// import styled from "styled-components";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import DashboardDataCard from "../components/DashboardDataCard";

const Title = styled.div`
    color: palevioletred;
    background: steelblue;
    font-size: 2vw;
`;

class WidgetGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greeting: "Hola" };
    }
    render() {
        return (
            <DashboardDataCard position={this.props.position} widgetName="WidgetGreeting">
                <Title>
                    Name:
                    <br />
                    {this.props.name}
                </Title>
            </DashboardDataCard>
        );
    }
}

WidgetGreeting.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export default WidgetGreeting;
