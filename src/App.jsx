import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Page01 from "./TP2/01/index.html";
import Page02 from "./TP2/02/index.html";
import Page03 from "./TP2/03/index.html";
import Page04 from "./TP2/04/index.html";
import Page05 from "./TP2/05/index.html";
import Page06 from "./TP2/06/index.html";
import Page07 from "./TP2/07/index.html";
import Page08 from "./TP2/08/index.html";
import Page09 from "./TP2/09/index.html";
import Page10 from "./TP2/10/index.html";
import Page11 from "./TP2/11/index.html";
import Page12 from "./TP2/12/index.html";
import Page13 from "./TP2/13/index.html";
import Page14 from "./TP2/14/index.html";
import Page15 from "./TP2/15/index.html";
import Page16 from "./TP2/16/index.html";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/TP2/01" element={<Page01 />} />
        <Route path="/TP2/02" element={<Page02 />} />
        <Route path="/TP2/03" element={<Page03 />} />
        <Route path="/TP2/03" element={<Page03 />} />
        <Route path="/TP2/04" element={<Page04 />} />
        <Route path="/TP2/05" element={<Page05 />} />
        <Route path="/TP2/06" element={<Page06 />} />
        <Route path="/TP2/07" element={<Page07 />} />
        <Route path="/TP2/08" element={<Page08 />} />
        <Route path="/TP2/09" element={<Page09 />} />
        <Route path="/TP2/10" element={<Page10 />} />
        <Route path="/TP2/11" element={<Page11 />} />
        <Route path="/TP2/12" element={<Page12 />} />
        <Route path="/TP2/13" element={<Page13 />} />
        <Route path="/TP2/14" element={<Page14 />} />
        <Route path="/TP2/15" element={<Page15 />} />
        <Route path="/TP2/16" element={<Page16 />} />
      </Routes>
    </Router>
  );
}

// export default function App() {
//   return (
//     <main>
//       <a href="./TP2/01/index.html">TP 2.1</a>
//       <a href="./TP2/02/index.html">TP 2.2</a>
//       <a href="./TP2/03/index.html">TP 2.3</a>
//       <a href="./TP2/04/index.html">TP 2.4</a>
//       <a href="./TP2/05/index.html">TP 2.5</a>
//       <a href="./TP2/06/index.html">TP 2.6</a>
//       <a href="./TP2/07/index.html">TP 2.7</a>
//       <a href="./TP2/08/index.html">TP 2.8</a>
//       <a href="./TP2/09/index.html">TP 2.9</a>
//       <a href="./TP2/10/index.html">TP 2.10</a>
//       <a href="./TP2/11/index.html">TP 2.11</a>
//       <a href="./TP2/12/index.html">TP 2.12</a>
//       <a href="./TP2/13/index.html">TP 2.13</a>
//       <a href="./TP2/14/index.html">TP 2.14</a>
//       <a href="./TP2/15/index.html">TP 2.15</a>
//       <a href="./TP2/16/index.html">TP 2.16</a>
//     </main>
//   );
// }
