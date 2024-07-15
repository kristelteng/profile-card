import React from "react";
import { useDispatch } from "react-redux";
import { setBgColor } from "../../actions";
import "./ColorPicker.css";

const ColorPicker = ({ color }) => {

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newColor = event.target.value;
    dispatch(setBgColor(newColor));
    localStorage.setItem("bgColor", newColor);
  };

  return (
    <div className="card-background">
      <label htmlFor="bg-color-picker" className="color-picker-label">
        Card Background Color:
      </label>
      <input
        id="bg-color-picker"
        type="color"
        value={color}
        onChange={handleChange}
      />
    </div>
  )
}

export default ColorPicker;