//expect props.elements == array of element
import { useState } from "react";
import searchbutton from "../assets/search_button.svg";

const Searcher = (props) =>{
    const [query, setQuery] = useState('N/A');
    
    return(
        <div className="search-container">
            <form className="search-form"
                onSubmit={(e)=>{
                    e.preventDefault();
                    props.onSubmit(e.target[0].value)
                    console.log(e.target[0].value)
                }}>
                <input type="search" placeholder="搜尋站點" 
                    onChange={(e)=>{
                        if(e.target.value==='') setQuery('N/A')
                        else setQuery(e.target.value);
                    }}
                ></input>
                <input type="image" src={searchbutton} alt="submit"></input>            
            </form> 
            <div className="search-list">
                {
                    props.elements.filter((ele)=>{
                        if (ele.includes(query)){
                            return true;
                        }
                        return false;
                    }).map((ele)=>{
                        return (
                            <div>{ele}</div>
                        )
                    })
                }                
            </div>
        </div>
    )
};

export default Searcher;