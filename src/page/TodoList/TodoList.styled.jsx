import styled from 'styled-components';

export const TodoLists = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 24px;
`

   
 export const TodoListitem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: green;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${props => props.completed? 'scaleX(1)' : 'scaleX(0)'}
}
 
 
  
`

export const TodoListcheckbox = styled.input`
    cursor: pointer;
  width: 24px;
  height: 24px;`
  
export const TodoListbtn = styled.button`
border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #264fa8;
  color: $white;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #0c0b57;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`


export const TodoListtext = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;

  text-decoration: ${props => props.completed? 'line-through' : 'none'}

`

