import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               <ol key={"relativeList"}>
                <li key={"relativeListItem1"}>Relative 1</li>
                <li key={"relativeListItem2"}>Relative 2</li>
                <li key={"relativeListItem3"}>Relative 3</li>
               </ol>
            </div>
        )
    }
}


export default App;
