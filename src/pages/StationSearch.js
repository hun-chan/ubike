import { useState, useEffect } from "react";
import Selector from "../components/Selector";
import Searcher from "../components/Searcher";
import CheckboxSet from "../components/CheckboxSet";
import "../styles/stationsearch.css";

const StationSearch = () => {
    const [info, setInfo] = useState(null);
    const [district, setDistrict] = useState([]);
    const [checked, setChecked] = useState(null);
    const [city, setCity] = useState("台北市");

    useEffect (() => {
        fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            const D_set = new Set();
            data.forEach((a)=>{
                D_set.add(a.sarea)
            });
            setInfo(data);
            setDistrict([...D_set]);
            setChecked(D_set);
            console.log("info template: ", data[0]);
            return data;
        })
        .catch((error) => console.error(error));
        return (()=>{
            console.clear();
        });
    },[]);

    const Filter = (element, prop, mask) => {
        return mask?mask.has(element[prop]):false;
    };

    const ChangeCity = (val) => {
        setCity(val);
    };

    const ChangeDistrict = (val) => {
        setChecked(val);
    }

    return(
            <div className="w-container">
                <div className="w">
                    <h2 className="page-title">站點資訊</h2>
                </div>

                <div className="select-search-container w">
                    <Selector elements={district} onChange={ChangeCity}></Selector>
                    <Searcher elements={info?info.map((a)=>a.sna):[]}></Searcher>
                </div>
                <CheckboxSet elements={district} checked={checked} setCheck={ChangeDistrict} />
                <div className="w">
                    <table className="station-table">
                        <tr>
                            <th style={{borderRadius:"10px 0px 0px 0px"}}>縣市</th>
                            <th>區域</th>
                            <th style={{width:"42.8%"}}>站點名稱</th>
                            <th>可借車輛</th>
                            <th style={{borderRadius:"0px 10px 0px 0px"}}>可選空位</th>
                        </tr>
                        {info?info.filter((a) => Filter(a, 'sarea', checked)).map((data)=>{
                            return (
                            <tr key={data.sno}>
                                <td>{city}</td>
                                <td>{data.sarea}</td>
                                <td className="station-name" style={{textAlign:"left"}}>{data.sna}</td>
                                <td>{data.tot}</td>
                                <td>{data.sbi}</td>
                            </tr>
                            )
                        }):""}
                    </table>
                </div>
            </div>);
};

export default StationSearch;