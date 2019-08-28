import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import styled from "styled-components/macro";

// Styled component
const DataCardDiv = styled.div`
    /* Critical for functionality of dashboard, be carefule about changing */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100%;
    min-width: 100%;

    /* Not critical, just makes it pretty, so change */
    padding: 5px;
    background: #c6c3c3;
`;

const CardBody = styled.div`
    // Try to center just about any div within a widget card
    div {
        text-align: center;
    }
`;

// Create a widget class ---------
class DashboardDataCard extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { widgetName: "firstwidget" };
    }

    hideToolTipIn5Seconds() {
        console.log("Hiding tooltip in 5 seconds...");
    }

    render() {
        let styles = {};
        let cardBody_styles = {};
        // If the caller passed in styles, use them
        if (this.props.position) {
            styles.gridArea = this.props.position;
        }
        if (this.props.color) {
            styles.backgroundColor = this.props.color;
        }

        return (
            <DataCardDiv style={styles}>
                <CardBody style={cardBody_styles}>{this.props.children}</CardBody>
            </DataCardDiv>
        );
    }
}

DashboardDataCard.propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.string.isRequired,
    color: PropTypes.string,
    id: PropTypes.string,
    widgetName: PropTypes.string.isRequired
};

export default DashboardDataCard;
