import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme"

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        onChange={(e) => {
          setColor(e.target.value)
        }} type="text"
      />
      <button onClick={() => {
        dispatch(changeColor(color));
      }}>Change Color</button>

    </div>
  )
}

export default ChangeColor
