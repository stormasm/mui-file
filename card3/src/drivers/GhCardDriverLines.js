import React from "react";

import tileData1 from "./../data/tile1.json";
import tileData2 from "./../data/tile2.json";
import tileData3 from "./../data/tile3.json";
import tileData4 from "./../data/tile4.json";
import tileData5 from "./../data/tile5.json";
import tileData6 from "./../data/tile6.json";
import tileData7 from "./../data/tile7.json";
import tileData8 from "./../data/tile8.json";
import tileDatax from "./../data/nodejs-sandboxed-fs.json";
import tileDatay from "./../data/html5-node-diagram.json";

import GhCardView from "./../cards/GhCardViewVertical";

function CardDriver() {

  return (
  <div>
    <div>
      <GhCardView tileData={tileData1} />
    </div>
    <div>
      Check One
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileData2} />
    </div>
    <div>
      Check Two
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileData3} />
    </div>
    <div>
      Check Three
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileData4} />
    </div>
    <div>
      Check Four
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileData5} />
    </div>
    <div>
      Check Five
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileData6} />
    </div>
    <div>
      Check Six
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileData7} />
    </div>
    <div>
      Check Seven
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileData8} />
    </div>
    <div>
      Check Eight
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileDatax} />
    </div>
    <div>
      Check Nine
    </div>
    <hr></hr>

    <div>
      <GhCardView tileData={tileDatay} />
    </div>
    <div>
      Check Ten
    </div>
    <hr></hr>

  </div>
  );
}

export default CardDriver;
