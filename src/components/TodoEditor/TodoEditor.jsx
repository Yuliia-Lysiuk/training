import { useState } from "react"
import { TodoEditorsbutton } from "./TodoEditor.styled";
import { TodoEditorstextarea } from "./TodoEditor.styled";
import { TodoEditors } from "./TodoEditor.styled";

export function TodoEditor({informSubmit}) {
    const [message, setMessage] = useState('');

    const onChangeTexterea = (e) => {
        setMessage(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        informSubmit(message);
        setMessage('');
    };


    return <TodoEditors onSubmit={onSubmit}>
        <TodoEditorstextarea value={message} onChange={onChangeTexterea}></TodoEditorstextarea>
        <TodoEditorsbutton type="submit">Add</TodoEditorsbutton>
    </TodoEditors>
}