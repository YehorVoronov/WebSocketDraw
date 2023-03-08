import React from "react";
//am i need bottom
import "./../styles/toolbar.scss"
import toolState from "../store/toolState";

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label htmlFor="line-width">Line-width</label>
      <input style={{ margin: "0 10px" }}
      onChange={e=>toolState.setLineWidth(e.target.value)}
       id="line-width" 
       type="number"
        defaultValue={1} min={1} max={50} />
      <label htmlFor="stroke-color">stroke-color</label>
      <input style={{ margin: "0 10px" }}
      onChange={e=>toolState.setStrokeColor(e.target.value)}
       id="stroke-color" 
       type="color"/>
    </div>
  )
}

export default SettingBar;