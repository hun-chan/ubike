//expect props.elements == array of element
import { useState } from "react";
import searchbutton from "../assets/search_button.svg";
import React from "react";

//query 紀錄實際搜尋使用之值
//tmp 紀錄目前輸入之關鍵字，進而生成站點選單

const Searcher = (props) =>{
    const [query, setQuery] = useState('N/A');
    const [tmp, setTmp] = useState(null);
    return(
        <div className="search-container">
            <form className="search-form"
                onSubmit={(e)=>{
                    e.preventDefault();
                    props.onSubmit(e.target[0].value)
                    console.log(e.target[0].value)
                }}>
                <input type="text" placeholder="搜尋站點"
                    value={
                        query==='N/A'?'':query
                    }
                    onChange={(e)=>{
                        if(e.target.value==='') setQuery('N/A')
                        else {
                            setQuery(e.target.value);
                            setTmp(e.target.value);
                        }
                    }}
                    onFocus={(e)=>{
                        if(e.target.value==='') setQuery('N/A')
                        else setQuery(e.target.value);
                    }}
                    onBlur={()=>{
                        setTmp(null);
                    }}
                ></input>
                <input type="image" src={searchbutton} alt="submit"></input>            
            </form> 
            <div className="search-list">
                {
                    props.elements.filter((ele)=>{
                        if (ele.includes(tmp)){
                            return true;
                        }
                        return false;
                    }).map((ele)=>{
                        return (
                            <div
                            onMouseOver={(e)=>{
                                setQuery(e.target.innerHTML);
                            }}
                            onClick={(e)=>{
                                setTmp(e.target.innerHTML);
                            }}>
                                {ele.slice(11)}</div>
                        )
                    })
                }                
            </div>
        </div>
    )
};

export default Searcher;