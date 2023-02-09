import React, { useState } from 'react'
import './styles.css'

const TextField = (props) => {

const onWrite = (event) => {
    props.Alterado(event.target.value)
}

    return(
       <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={onWrite} required={props.obligation} placeholder={props.placeholder}/>
       </div> 
    );
}

export default TextField