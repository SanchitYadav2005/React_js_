import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

class App extends Component {
  findPalette(id){
    // in here we are getting the id from generatePalette and finding the searched id in it.
    return seedColors.find(function(palette){
      // comparing the palettes id to the passed id
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => 
          <PaletteList 
          // setting routeprops to use history prop further.
          palettes={seedColors} {...routeProps}
          />}
        />
        <Route
          exact
          path="/palette/:id" 
          render={(routeProps) => 
          <Palette 
          // passing the id to the function to get the clicked palette.
          palette={generatePalette(this.findPalette(routeProps.match.params.id))}
          />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <SingleColorPalette/>}
        />
      </Switch>
      
      // // in here we are just getting some sorted of color data that contains the color name, id and other infos about the color
      // <div className="App">
      //   {/* here we are parsing that seedColors into a function that we a are importing from colorHelpers file other infos about this funciton will be in that file. We are sending this information about the color ot palette component that helps us to display it. */}
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
