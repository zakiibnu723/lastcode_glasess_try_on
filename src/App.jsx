import * as React from 'react';
import { GlassArView } from "@lastcode802/glassarview";

function App() {
  return (
    <GlassArView
      modelname="rayban_aviator_or_vertFlash"
      canvasheight={500}
      canvaswidth={500}
      buttonBackgroundColor="#FFE5B4"
      buttonFontColor="white"
    />
  );
}

export default App;
