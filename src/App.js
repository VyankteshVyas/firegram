import React from 'react';
import Imagegrid from './comps/Imagegrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <Imagegrid/>
    </div>
  );
}

export default App;
