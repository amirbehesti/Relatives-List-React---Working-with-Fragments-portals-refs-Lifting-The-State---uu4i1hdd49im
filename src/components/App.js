import React, {Component, useState} from "react";
import '../styles/App.css';

const relativeList = ["relativeListItem1","relativeListItem2", "relativeListItem3", "relativeListItem4", "relativeListItem2"];

const App = ()=>{
        const listItems = relativeList.map((item) =>
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


export default App;
