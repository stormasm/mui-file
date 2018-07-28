import React from "react";

import tileData from "./../data/nodejs-sandboxed-fs.json";
//import tileData from "./../data/ivy.json";
import GhCardView from "./../cards/GhCardViewHorizontal";

function CardDriver() {

  return (
    <div>
      <GhCardView tileData={tileData} />
    </div>
  );
}

export default CardDriver;
