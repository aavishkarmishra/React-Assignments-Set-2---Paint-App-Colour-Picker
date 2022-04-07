import { useEffect, useState } from 'react';

import React from 'react';

const Subheading = () => {
  return (
    <div className="subheading">
      <h2>Selection</h2>
    </div>
  );
};

const Selection = (props) => {
  const [bg, setbg] = useState({ background: 'white' });
  const handle = () => {
    var x = props.applyColor();
    setbg(x);
  };
  return (
    <>
      <Subheading />
      <div style={bg} className="fix-box" onClick={() => handle()}></div>
    </>
  );
};

export default Selection;
