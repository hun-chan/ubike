import image from "../assets/people_ride_bike.svg";
import React from "react";
//<CheckboxSet elements={district} checked={checked} setCheck={ChangeDistrict} />
const CheckboxSet = (props) => {
    if(!props.elements) return <></>;
    return (
        <>
            <div className="checkbox-image-container">
                <form>
                    <fieldset className="grid-container2" style={{"border":"none"}}>
                        <label>
                            <input type="checkbox" defaultChecked={false} className="all-checker"
                                onClick={(e)=>{
                                    if(e.target.checked){
                                        props.onCheck(new Set(props.elements));
                                    }
                                    else{
                                        props.onCheck(new Set());
                                    }
                            }}/>全部勾選
                            <span className="checkmark"></span>
                        </label>
                        {props.elements.map((a)=>{
                            return (
                                <>
                                    <label>
                                        <input type="checkbox" id={a} key={a} checked={props.checked.has(a)}
                                            onClick={(e)=>{
                                                let temp = props.checked;
                                                if(e.target.checked){
                                                    temp.add(e.target.id);
                                                    props.onCheck(new Set(temp));
                                                }
                                                else{
                                                    temp.delete(e.target.id);
                                                    props.onCheck(new Set(temp));
                                                }
                                        }}/>{a}
                                        <span className="checkmark"></span>
                                    </label>
                                </>
                            )
                        })}
                    </fieldset>
                </form>
            </div>
            <img src={image} alt="" className="bike-image"></img>
        </>
    )
};

export default CheckboxSet;