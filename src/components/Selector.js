const Selector = (props) => {
    const onchange = (val) => {
        props.onChange(val);
    }

    return(
        <form>
            <select name="city-selection" onChange={(e)=>onchange(e.target.value)}>
                {!!props.elements?props.elements.map((ele)=>{
                    return(
                        <option value={ele} key={ele}>{ele}</option>
                    )
                }):""}
            </select>
        </form>
    )
};

export default Selector;