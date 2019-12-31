import React from "react";
import { Button, Sidebar, Menu, Segment, Icon } from "semantic-ui-react";

import Dashboard from "./components/Dashboard";
import styled from "styled-components/macro";
// import { ThemeProvider } from "./components/ThemeContext";
import { ThemeProvider } from "styled-components";

let theme = {
    darkColorTheme: {
        // Page
        colorThemePageBackground: "#636977",
        colorThemePageTitle: "#bbb3b3",

        // Default
        colorThemeFontDefault: "#bbb3b3",

        // Card
        colorThemeCardBackground: "#2b2d3e",
        colorThemeCardFontDefault: "#eeeeee",
        colorThemeCardFontBlue: "#0bc2f0",
        colorThemeCardFontRed: "#ff6666",
        colorThemeCardFontAmber: "#e46e00",
        colorThemeCardFontGreen: "#66ff66",
        colorThemeCardTableGridLines: "#b9b9b998",
        colorThemeCardTableCellBackgroundRed: "#af0000",
        colorThemeCardTableCellBackgroundAmber: "#e46e00",
        colorThemeCardTableCellBackgroundGreen: "#009c00",

        // LeftNav
        colorThemeLeftNavButtons: "#bbb3b3",
        colorThemeLeftNavLinks: "#bbb3b3",
        colorThemeLeftNavLinksHover: "#4183c4",

        // Widget Links
        colorThemeWidgetLinks: "#4183c4",

        // Scrollbar
        colorThemeScrollbarTrackBackground: "#5c5f7a",
        colorThemeScrollbarThumbBackground: "#988b8b",

        // Chart
        colorThemeChartData: "#c0cde2",
        colorThemeChartGreen: "#338a2e",
        colorThemeChartBrown: "#aa7c39",
        colorThemeChartPurple: "#e749e7"
    },

    lightColorTheme: {
        // Page
        colorThemePageBackground: "#d7d8db",
        colorThemePageTitle: "#000000",

        // Default
        colorThemeFontDefault: "#000000",

        // Card
        colorThemeCardBackground: "#c3c4c6",
        colorThemeCardFontDefault: "#000000",
        colorThemeCardFontBlue: "#0159b7",
        colorThemeCardFontRed: "#ff6666",
        colorThemeCardFontAmber: "#cd7d32",
        colorThemeCardFontGreen: "#36a336",
        colorThemeCardTableGridLines: "#969696",
        colorThemeCardTableCellBackgroundRed: "#a93737",
        colorThemeCardTableCellBackgroundAmber: "#cd7d32",
        colorThemeCardTableCellBackgroundGreen: "#2fb12f",

        // Left Nav
        colorThemeLeftNavButtons: "#bbb3b3",
        colorThemeLeftNavLinks: "#bbb3b3",
        colorThemeLeftNavLinksHover: "#4183c4",

        // Widget Links
        colorThemeWidgetLinks: "#4183c4",

        // Srollbar
        colorThemeScrollbarTrackBackground: "#ebebeb",
        colorThemeScrollbarThumbBackground: "#9c9c9c",

        // Chart
        colorThemeChartData: "#192453",
        colorThemeChartGreen: "#338a2e",
        colorThemeChartBrown: "#aa7c39",
        colorThemeChartPurple: "#6f256f"
    },
    currentColorTheme: null
};

// Select/Pick/Toggle a color theme to use
// theme.currentColorTheme = theme.lightColorTheme;
theme.currentColorTheme = theme.darkColorTheme;

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
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        );
    }
}

export default App;
