import React from "react";
import "./../styles/toolbar.scss"
import ToolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import toolState from "../store/toolState";
import Eraser from "../tools/Eraser";

const Toolbar=()=>{

  const changeColor=e=>{
    ToolState.setStrokeColor(e.target.value)
    ToolState.setFillColor(e.target.value)
  }

  const download = () => {
    const dataUrl = canvasState.canvas.toDataURL()
    console.log(dataUrl)
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = canvasState.sessionid + ".jpg"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
  return(
    <div className="toolbar">
      <button className="toolbar__btn brush" onClick={()=>ToolState.setTool(new Brush(canvasState.canvas,canvasState.socket,canvasState.sessionid))}/>
      <button className="toolbar__btn rect" onClick={()=>ToolState.setTool(new Rect(canvasState.canvas,canvasState.socket,canvasState.sessionid))}/>
      <button className="toolbar__btn circle"/>
      <button  className="toolbar__btn eraser" onClick={()=>{ToolState.setTool(new Eraser(canvasState.canvas))}}/>
      <button className="toolbar__btn line"/>
      <input onChange={e=>changeColor(e)} style={{marginLeft:10}} type="color"/>
      <button className="toolbar__btn undo" onClick={()=>{canvasState.undo()}}/>
      <button className="toolbar__btn redo" onClick={()=>{canvasState.redo()}}/>
      <button className="toolbar__btn save"  onClick={() => download()}/>
    </div>
  )
}

export default Toolbar;