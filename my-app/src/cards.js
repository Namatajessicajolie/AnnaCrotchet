import React from "react";
import React, {
    Component
} from "react";
import {products} from './products';
const Card=(props)=> {
        return (
        <div>
            <img src={props.id} alt="sweater"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div >
        );
    }


export default Card;