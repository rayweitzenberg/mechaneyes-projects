import p5 from "p5";

const pacificState = (sketch) => {
  let numCircs = 24;
  let circs = [];
  let circle;
  let circleMax;
  let circleMin;
  let scaler = [];
  let strobeRate;
  let shrinkRate;
  let isShrinking = false;
  let isCollapsed = false;
  let popRate = 0;

  // const bubblegum = ["#052D3E", "#4D9BA6", "#F4C127", "#D87D0F", "#A63305"];
  // const LAtoSD = ["#D9525E", "#0C2E59", "#175073", "#2E8C83", "#05F2AF"];
  // const harvUnicorn = ["#F22E62", "#BF2C47", "#1B80BF", "#1EA4D9", "#77BDD9"];
  // const fiftyFifty = ["#AC590E", "#FF9C43", "#F98B29", "#00BBE5", "#29D3F9"];
  // const shepLight = ["#FFF587", "#FF8C64", "#FF665A", "#7D6B7D", "#A3A1A8"];
  // const selectedColor = circColors.bubblegum;

  const circColors = {
    bubblegum: ["#052D3E", "#4D9BA6", "#F4C127", "#D87D0F", "#A63305"],
    LAtoSD: ["#D9525E", "#0C2E59", "#175073", "#2E8C83", "#05F2AF"],
    harvUnicorn: ["#F22E62", "#BF2C47", "#1B80BF", "#1EA4D9", "#77BDD9"],
    fiftyFifty: ["#AC590E", "#FF9C43", "#F98B29", "#00BBE5", "#29D3F9"],
    shepLight: ["#FFF587", "#FF8C64", "#FF665A", "#7D6B7D", "#A3A1A8"],
  };
  let randoArray;
  let randoColor;

  const randomColorArray = (obj) => {
    let keys = Object.keys(obj);
    randoArray = obj[keys[(keys.length * Math.random()) << 0]];
  };
  randomColorArray(circColors);
  let color;

  // console.log('progressCount', props.progressCount)

  // <!-- ————————————————————————————————————o SETUP -->
  // <!-- ————————————————————————————————————o -->
  sketch.setup = () => {
    sketch.frameRate(60);
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

    console.log(sketch.windowWidth)

    sketch.noStroke();
    sketch.background("black");

    // Number and sizes of circles for various screen sizes
    //
    numCircs = 24;
    circleMax = sketch.width / 3;
    circleMin = sketch.width / 4.7;
    strobeRate = 0.02;

    if (sketch.width > 1000) {
      numCircs = 35;
      circleMax = sketch.width / 3;
      circleMin = sketch.width / 15;
    }

    if (sketch.width > 2000) {
      numCircs = 35;
      circleMax = sketch.width / 4;
      circleMin = sketch.width / 10;
      strobeRate = 0.02;
    }

    for (let i = 0; i < circs.length; i++) {
      scaler[i] = sketch.random(1, circs.length);
    }

    generate(sketch);
  };

  // <!-- ————————————————————————————————————o Circle Generator -->
  // <!-- ————————————————————————————————————o -->
  const generate = () => {
    for (let i = 0; i < numCircs; i++) {
      selectColor(sketch);

      circle = {
        x: sketch.random(sketch.windowWidth),
        y: sketch.random(sketch.windowHeight),
        r: sketch.random(circleMin, circleMax),
        color: color,
        grow: true,
      };
      circs.push(circle);

      // circsSize.push(circle.r)
      // console.log('circsSize', circle.r)
    }
  };

  // <!-- ————————————————————————————————————o Color Picker -->
  // <!-- ————————————————————————————————————o -->
  const selectColor = () => {
    randoColor = randoArray[Math.floor(Math.random() * randoArray.length)];
    color = sketch.color(randoColor);
    color.setAlpha(sketch.random(175, 255));
    sketch.fill(color);
  };

  // <!-- ————————————————————————————————————o Run Circles Run -->
  // <!-- ————————————————————————————————————o -->
  const runCircles = () => {
    for (let i = 0; i < circs.length; i++) {
      sketch.fill(circs[i].color);
      sketch.circle(
        circs[i].x,
        circs[i].y,
        isCollapsed ? shrinkRate : sketch.cos(circs[i].r) * circs[i].r
      );

      if (circs[i].grow && circs[i].r >= circleMax) {
        circs[i].grow = false;
        circs[i].r -= strobeRate;
      } else if (!circs[i].grow && circs[i].r <= circleMin) {
        circs[i].grow = true;
        circs[i].r += strobeRate;
      } else {
        circs[i].r += strobeRate;
      }
      // console.log("sizes", i, circs[1].r);
    }
  };

  // <!-- ————————————————————————————————————o pop() unshift() circles -->
  // <!-- ————————————————————————————————————o -->
  const popCirc = (theScaler) => {
    theScaler = theScaler * 14;
    let scalerRounded = Math.floor(theScaler);

    if (scalerRounded % 250 === 0) {
      // console.log("theScaler", scalerRounded);

      selectColor(sketch);
      circle = {
        x: sketch.random(sketch.windowWidth),
        y: sketch.random(sketch.windowHeight),
        r: sketch.random(circleMin, circleMax),
        color: color,
        grow: true,
      };
      circs.unshift(circle);
      circs.pop();
    }
  };

  // <!-- ————————————————————————————————————o End the Experience -->
  // <!-- ————————————————————————————————————o -->
  // let collapse = () => {
  //   isCollapsed = !isCollapsed;
  // };

  const killCircles = (origDiameter) => {
    shrinkRate = origDiameter;
    if (shrinkRate < 0) {
      shrinkRate = shrinkRate * -4;
    }
  };

  // <!-- ————————————————————————————————————o DRAW -->
  // <!-- ————————————————————————————————————o -->
  sketch.draw = () => {
    sketch.background("black");

    runCircles(sketch);
    popRate += 0.08;
    popCirc(popRate, sketch);

    if (isCollapsed) {
      while (!isShrinking) {
        for (let i = 0; i < circs.length; i++) {
          killCircles(sketch.width / 2);
        }
        isShrinking = true;
      }
    }

    if (sketch.width > 2000) {
      shrinkRate -= 25;
    } else {
      shrinkRate -= 5;
    }
    if (shrinkRate <= -5) {
      sketch.noLoop();
      sketch.background("black");
      window.open("/welcome", "_self");
    }
  };
};

new p5(pacificState, 'hero--bloom')

export default pacificState;
