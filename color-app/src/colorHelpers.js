import chroma from 'chroma-js';
// here we are deciding how many levels we will have.
const levels = [50,100,200,300,400,500,600,700,800,900]

function generatePalette(starterPalette){
    // we are getting the startedPalette from the app component and there we are imporing file named seedColors .
    // this function will get a parameter that will help us to generate new palette.
    let newPalette = {
        // new palette have these information about the color.
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    for(let level of levels){
        // we are creating array for each level that we have already decided.
        newPalette.colors[level] = []
    }
    for (let color of starterPalette.colors) {
        // here we are looping over each color.
        // gerScale is a function that we have defined below and it got two parameter hexColor and numberOfColor.
        let scale = getScale(color.color, 10).reverse();
        for (let i in scale) {
            // in here we are pushing into the newPallete object
          newPalette.colors[levels[i]].push({
            name: `${color.name} ${levels[i]}`,
            id: color.name.toLowerCase().replace(/ /g, "-"),
            // here we are defining the colors in hex, rgb and rgba
            hex: scale[i],
            rgb: chroma(scale[i]).css(),
            rgba: chroma(scale[i])
              .css()
              .replace("rgb", "rgba")
              .replace(")", ",1.0)")
          });
        }
      }
      // returing the palette that we display in our app component
      return newPalette;
    
}

function getRange(hexColor){
    const end = "#fff";
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ];
}

function getScale(hexColor,numberOfColors){
    return chroma
        .scale(getRange(hexColor))
        .mode("lab")
        .colors(numberOfColors)
}

export {generatePalette}