import React from "react";
import { Routes, Route } from "react-router-dom";

import G5Homepage from "./pages/g5-homepage/g5-homepage";
import BoxOne from "./pages/g5-box-one/g5-box-one";
import BoxTwo from "./pages/g5-box-two/g5-box-two.jsx";
import BoxThree from "./pages/g5-box-three/g5-box-three.jsx";
import BoxFour from "./pages/g5-box-four/g5-box-four.jsx";
import BoxFive from "./pages/g5-box-five/g5-box-five.jsx";
import Archive from "./pages/g5-archive/g5-archive.jsx";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<G5Homepage />} />
      <Route path="/box-one" Component={BoxOne} />
      <Route path="/box-two" Component={BoxTwo} />
      <Route path="/box-three" Component={BoxThree} />
      <Route path="/box-four" Component={BoxFour} />
      <Route path="/box-five" Component={BoxFive} />
      <Route path="/archive" Component={Archive} />
    </Routes>
  </div>
);

export default App;
