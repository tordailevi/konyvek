import React from 'react'
import Konyv from './Konyv.js'

export default function Konyvek(props) {
  return (
    <div className="row">
        <h2>Könyveink</h2>
        {
            props.konyvLista.map((adat,index) => {
                return <Konyv adat={adat} key={index} index={index} kosarbafv={props.kosarbafv}/>
            })
        }
        
    </div>
  )
}
