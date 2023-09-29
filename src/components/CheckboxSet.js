import image from "../assets/people_ride_bike.svg";
//<CheckboxSet elements={district} checked={checked} setCheck={ChangeDistrict} />
const CheckboxSet = (props) => {
    if(!props.elements) return <></>;
    return (
        <div className="selector-image-container w">
            <form>
                <fieldset style={{"border":"none"}}>
                    {props.elements.map((a)=>{
                        return (
                            <>
                                <input type="checkbox" id={a} key={a} defaultChecked={true}
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
                                }}/>
                                <label>{a}</label>
                            </>
                        )
                    })}
                </fieldset>
            </form>
            <img src={image} alt="" className="bike-image"></img>
        </div>
    )
};

export default CheckboxSet;