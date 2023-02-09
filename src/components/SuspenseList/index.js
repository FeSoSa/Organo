import React from "react";
import './styles.css'

const SuspenseList = (props) => {
    return(
        <div className="SuspenseList">
            <label>{props.label}</label>
            <select onChange={event => props.Alterado(event.target.value)} value={props.valor}>
                <option value=" "/>
                {props.items.map(item => <option key={item}>{item}</option>)}

            </select>
        </div>
    );

}

export default SuspenseList