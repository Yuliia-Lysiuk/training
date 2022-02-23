import { Filter } from "components/Filter/Filter"
import { TodoEditor } from "components/TodoEditor/TodoEditor"
import { TodoListtext } from "./TodoList.styled"
import { TodoListcheckbox } from "./TodoList.styled"
import { TodoListbtn } from "./TodoList.styled"
import { TodoListitem } from "./TodoList.styled"
import { TodoLists } from "./TodoList.styled"
import shortid from 'shortid';
import { useEffect, useState } from "react";

export function TodoList({todost}) {
  const doneTodo = todost.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  const [todos, setTodos] = useState(()=>JSON.parse(localStorage.getItem('TODOS')) ?? todost);
  const [value, setValue] = useState('');
  
  useEffect(() => { localStorage.setItem('TODOS', JSON.stringify(todos)) }, [todos]);


  const onChange = (e) => {
    const filterTodo = e.target.value;
    setValue(filterTodo); 
  }

  const onDeleteTodo = todoId => {
    setTodos(prevState => (prevState.filter(todo => todo.id !== todoId)))
  };

  const onTogleCompleted = todoId => {
    const newtodo = todos.map(
      todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
    setTodos(newtodo);
   }


  const informTexterea = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    setTodos([...todos, todo])
  }

   const normalizedFilter = value.toLowerCase();
  const visibleTodos = todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter));

    return (<>
        <p>quantity: {todos.length}</p>
      <p>done: {doneTodo}</p>
        <TodoEditor informSubmit={ informTexterea}/>
        <Filter value={value} onChange={ onChange}/>
        <TodoLists >
            {visibleTodos.map(({ id, text, completed }) => (
                <TodoListitem key={id} completed={completed}>
                    <label >
                        <TodoListcheckbox type="checkbox" checked={completed} onChange={()=> onTogleCompleted(id)}/>
                    </label>
                    <TodoListtext completed={completed}>{text}</TodoListtext>
                    <TodoListbtn onClick={() => onDeleteTodo(id)}>Удалить</TodoListbtn>
                </TodoListitem>
            ))}
        </TodoLists>
    </>)
};