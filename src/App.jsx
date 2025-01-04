import React from 'react';
import { GlassesARView } from '@lastcode802/glassarview';

function App() {
  return (
    <GlassesARView
      // model3dmtl="./assets/glassesModel.mtl"
      model3dobj="./assets/MOSCOT_ZEV_TT_SE.obj"
      // Additional props and configurations
    />
  );
}

export default App;
