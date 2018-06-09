import React from "react";
//import {Header} from "semantic-ui-react";

export default props => {
    console.log("Omg  = " + JSON.parse(props));
    return (
        <div>
            <h1>This is Header</h1>
            {props.children}
        </div>
    );

};
