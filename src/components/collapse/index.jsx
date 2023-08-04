import React, { useState, useEffect, useRef } from 'react';
import "../../style/collapse.scss"
import ArrowUp from "../../assets/ArrowUp.png"

function Collapse({ titleCollapse, descriptionCollapse }) {
  const [toggle, setToggle] = useState(false);
  const [heightEL, setHeightEL] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEL(`${refHeight.current.scrollHeight}px`)
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  }

  return (
    <div className='collapse'>
      <button onClick={toggleState} className="collapse-visible">
        <p>{titleCollapse}</p>
        <img src={ArrowUp} alt='flèche' className={`ArrowUp ${toggle ? 'ArrowUp-Active' : ''}`} />
      </button>
      <div
        className={toggle ? "collapse-toggle animated" : "collapse-toggle"}
        ref={refHeight}
        style={{ height: toggle ? `${heightEL}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>
          {descriptionCollapse}
        </p>
      </div>
    </div>
  );
}

export default Collapse;
