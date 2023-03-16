import React from 'react'
import './styles.css'

const Field = (props) => {

const onWrite = (event) => {
    props.Alterado(event.target.value)
}

    return(
       <div className={`field field-${props.type}`}>
            <label>{props.label}</label>
            <input type={props.type} value={props.valor} onChange={onWrite} required={props.obligation} placeholder={props.placeholder}/>
       </div> 
    );
}

export default Field