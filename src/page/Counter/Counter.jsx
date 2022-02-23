import {  useState } from "react"

export function Counter() {
    const [value, setValue] = useState(0);
   
    
    
    return <div>
        
        <button type='button' onClick={() => {
            setValue((prevState) => prevState - 1);
        }}
            disabled={value < 1}>
            -
        </button>
        <span>{ value}</span>
        <button type='button' onClick={() => {
            setValue((prevState) => prevState + 1);
        }}
            disabled={value > 9}>
            +
        </button>
    </div>
}