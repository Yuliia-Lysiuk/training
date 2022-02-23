import styled from 'styled-components';

export const TodoEditors = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 20px; 
`


export const TodoEditorstextarea = styled.textarea`
  $line-height: 16px;

  height:  54px;
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: 10px;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
`
export const TodoEditorsbutton = styled.button`
border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  width: 100%;
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #3e45aa;
  color: white;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #301ba5;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`