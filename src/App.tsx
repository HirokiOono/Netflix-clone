import React from "react";
import "./App.css";
import { Row } from "./compornents/Row";
import { Banner } from "./compornents/Banner";
import { Nav } from "./compornents/Nav";
import { NetflixOriginals } from "./request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {/* <Row title="NETFLIX ORIGUINALS" fetchUrl={} isLargeRow /> */}
      <Row title="Top Rated" requests={NetflixOriginals} />
      {/* <Row title="Action Movies"  />
      <Row title="Comedy Movies"  />
      <Row title="Horror Movies"  />
      <Row title="Romance Movies"  />
      <Row title="DOcumentaries" /> */}
    </div>
  );
}

export default App;
