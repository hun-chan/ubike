//expect props.elements == array of element
import { useState } from "react";
import "../styles/searcher.css";

const Searcher = (props) =>{
    const [query, setQuery] = useState('N/A');

    return(
        <div className="search-container"> 
            <input type="search" placeholder="搜尋站點" 
                onChange={(e)=>{
                    if(e.target.value==='') setQuery('N/A')
                    else setQuery(e.target.value);
                }}
            ></input>
            <div className="search-list">
                {
                    props.elements.filter((ele)=>{
                        if (ele.includes(query)){
                            return true;
                        }
                        return false;
                    }).map((ele)=>{
                        return (
                            <span>{ele}</span>
                        )
                    })
                }                
            </div>
        </div>
    )
};

export default Searcher;