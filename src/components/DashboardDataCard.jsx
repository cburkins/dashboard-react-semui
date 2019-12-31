import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { ThemeConsumer } from "styled-components";

// Styled component, which is a CSS-in-JS solution/library (converts to CSS style sheet, not inline)
// When you pass in expression (interpolated function), styled-component library passes you the component props
const DataCardDiv = styled.div`
    /* Critical for functionality of dashboard, be carefule about changing */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100%;
    min-width: 100%;

    /* Not critical, just makes it pretty, so change */
    background-color: ${props => props.theme.currentColorTheme.colorThemeCardBackground};
    padding: 5px;
`;

// Styled component
const CardBodyDiv = styled.div`
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

    componentDidMount() {
        console.log("this.props.theme", this.props.theme);
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
            <ThemeConsumer>
                {/* Use a render prop to get the global value from the Context API Consumer */}
                {theme => (
                    <DataCardDiv style={styles}>
                        <CardBodyDiv style={cardBody_styles}>{this.props.children}</CardBodyDiv>
                    </DataCardDiv>
                )}
            </ThemeConsumer>
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
