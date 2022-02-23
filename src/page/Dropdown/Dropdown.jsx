import {  useState } from "react"

export function Dropdown() {
    const [modal, setModal] = useState(false);

    const buttonClick = () => {
        setModal((prevState) => !prevState);

    }

    return <div>
        <p>hhhhhhhkjjjjjjjjjjjjjjggggggggggggggggggggggjjjjjjj </p>
        <button type="button" onClick={buttonClick}>
        {modal? "close" : "shown"}
        </button>
        
        {modal && <div>modal window</div>}
    </div>
    
}