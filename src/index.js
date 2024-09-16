//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import reactDom from "react-dom";
import { ScriptElementKindModifier } from "typescript";
const date = new Date();
const currenttime = date.getHours();
let greeting;
const custumstyle = {
  color: "",
};
if (currenttime < 12) {
  greeting = "Good  morning";
  custumstyle.color = "red";
} else if (currenttime > 12 && currenttime < 18) {
  greeting = " Good Afternoon";
  custumstyle.color = "green";
} else {
  greeting = "Good Night";
  custumstyle.color = "blue";
}
reactDom.render(
  <h1 className="heading" style={custumstyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
console.log(currenttime);
