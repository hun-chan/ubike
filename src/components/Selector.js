import React from "react";
const Selector = (props) => {
    const onchange = (val) => {
        props.onChange(val);
    }

    return(
        <div className="selector-container">
            <form className="selection-form">
                <select name="city-selection" onChange={(e)=>onchange(e.target.value)}>
                    {!!props.elements?props.elements.map((ele)=>{
                        return(
                            <option value={ele} key={ele}>{ele}</option>
                        )
                    }):""}
                </select>
            </form>
        </div>
    )
};

export default Selector;