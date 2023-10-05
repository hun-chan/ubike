import React from "react";
import { useState } from "react";
import select_button from "../assets/select_button.svg"

const Selector = (props) => {
    const [show, setShow] = useState(false);

    const select_ele = (val) => {
        props.onChange(val);
    }


    return(
        <div className="selector-container">
            <div className="selection-form"
            onClick={(e)=>{
                e.preventDefault();
                setShow(!show);
            }}>
                <div className="city-selection">
                    <p>{props.selected}</p>
                </div>
                <input type="image" src={select_button} alt="button"
                onClick={(e)=>{
                    e.preventDefault();
                    setShow(!show);
                }}
                onBlur={()=>{setShow(!show)}}
                ></input> 
            </div>
            <div className="select-list" style={show?{display:"block"}:{display:"none"}}>
                {props.elements?props.elements.map((ele)=>{
                            return(
                                <div value={ele} key={ele}
                                onMouseDownCapture={(e)=>{
                                    select_ele(e.target.innerHTML);
                                    console.log(e.target.innerHTML);
                                    setShow(!show);
                                }}>{ele}</div>
                            )
                        }):""}
            </div>
        </div>
    )
};

export default Selector;