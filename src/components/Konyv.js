import { KosarContext } from "../contexts/KosarContext.js"
import { useContext } from "react";

export default function Konyv(props){
  const {kosarba} = useContext(KosarContext) 

    function kosar(){
        console.log(props.index)
        kosarba(props.index)
    }

return(
    <div className="card col-lg-4 col-md-6">
    <div className="card-body">
        <h5 className="card-title">{props.adat.cim}</h5>
        <p className="card-text">{props.adat.szerzo}</p>
        <p className="card-text">{props.adat.leiras}</p>
        <button type="button" className="btn btn-primary" onClick={kosar}>Kosárba</button>
    </div>
    </div>
)
}