import React from 'react'

export default function Kosar(props) {
  return (
        <ul>
        {
            props.lista.map((adat,index) => {
                return <li key={index}>{adat.cim}</li>
            })
            
            
        }
        </ul>
  )
}
