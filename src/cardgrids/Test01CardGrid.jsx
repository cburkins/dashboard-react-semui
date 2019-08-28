import React from "react";

import CardGrid from "../cardgrids/cardGrid";
import WidgetGreeting from "../widgets/WidgetGreeting";
import WidgetSemanticDemo from "../widgets/WidgetSemanticDemo";

class Test01CardGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { var01: "barney" };
    }
    render() {
        return (
            <div>
                <CardGrid rows="12" row_height="3.5vw" columns="12" column_width="1fr">
                    <WidgetGreeting position="span 2 / span 2" name="Name01" />
                    <WidgetGreeting position="span 2 / span 2" name="Name02" />
                    <WidgetGreeting position="span 2 / span 2" name="Name03" />
                    <WidgetSemanticDemo position="span 8 / span 10" name="Semantic Demo" />
                </CardGrid>
            </div>
        );
    }
}

export default Test01CardGrid;
