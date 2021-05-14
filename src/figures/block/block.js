import "./block.scss";
import { useState, useEffect } from "react";
import up from '../../img/up.svg'
import down from '../../img/down.svg'
import right from '../../img/right.svg'
import left from '../../img/left.svg'
export const Test = () => {
  const [figure, setFigure] = useState("block");
  const [degreesY, setDegreesY] = useState(0);
  const [degreesX, setDegreesX] = useState(0);

  const rotateBlockY = (dir) => {
    if (dir === "up") {
      if (degreesY < 360) {
        setDegreesY(degreesY + 45);
      } else {
        setDegreesY(-360);
      }
    } else {
      if (degreesY > -360) {
        setDegreesY(degreesY - 45);
      } else {
        setDegreesY(360);
      }
    }
  };
  const rotateBlockX = (dir) => {
    if (dir === "left") {
      if (degreesX < 360) {
        setDegreesX(degreesX + 45);
      } else {
        setDegreesX(-360);
      }
    } else {
      if (degreesX > -360) {
        setDegreesX(degreesX - 45);
      } else {
        setDegreesX(360);
      }
    }
  };
  // console.log(document.getElementsByClassName('block').classList)

  const animate = () => {
    let block = document.querySelector(".block");
    block.classList.toggle("animate");
    console.log(block.classList);
  };
  console.log(degreesX, degreesY);
// let scale = 'scale(1.5)'
  return (
    <div>
      {figure === "block" && (
        <div className="block-place">
          <button onClick={() => rotateBlockY("up")} className="arrow"><img alt="arrow" className="img" src={up}/></button>
          <button onClick={() => rotateBlockX("left")} className="arrow"><img alt="arrow" className="img" src={left}/></button>
          <button onClick={() => animate()}>animate</button>

          <div className={`block degY-a${degreesY} degX-a${degreesX}`}>
            <div className="back" />
            <div className="front" />
            <div className="top" />
            <div className="left" />
            <div className="right" />
            <div className="bottom" />
          </div>
          <button onClick={() => rotateBlockX("right")} className="arrow"><img alt="arrow" className="img" src={right}/></button>
          <button onClick={() => rotateBlockY("down")} className="arrow"><img alt="arrow" className="img" src={down}/></button>
        </div>
      )}
    </div>
  );
};
