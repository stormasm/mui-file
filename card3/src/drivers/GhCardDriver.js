import React from "react";

import tileData from "./../data/html5-node-diagram.json";
//import tileData from "./../data/nodejs-sandboxed-fs.json";
//import tileData from "./../data/ivy.json";
import GhCardView from "./../cards/GhCardViewNoAvatar";

function CardDriver() {

  return (
    <div>
      <GhCardView tileData={tileData} />
    </div>
  );
}

export default CardDriver;
