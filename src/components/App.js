import React, {Component, useState} from "react";
import '../styles/App.css';

const relativeList = ["relativeListItem1","relativeListItem2", "relativeListItem3", "relativeListItem4", "relativeListItem2"];
class App extends Component {
    render() {
        const listItems = relativeList.map((item) =>
        // Correct! Key should be specified inside the array.
        <li key={item.toString()}>{item}</li>
      );
        return(
            <div id="main">
               <ol key={"relativeList"}>
                   {listItems}
               </ol>
            </div>
        )
    }
}


export default App;
