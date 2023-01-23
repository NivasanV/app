import { useState } from "react";

const State = ()=>{
    const[name, setName] = useState('Nivasan Good Boy ');
    const[app, setapp] = useState('cute');
    return(
        <div>
            <Props name = {name} app={app} />
        </div>
    );
}
export default State;

const Props = (props)=>{
    return(
        <h1>{props.name} and {props.app}</h1>
    );
}