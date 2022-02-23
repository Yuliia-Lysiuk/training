import styled from 'styled-components';

export const Button = styled.button`
 display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;

  transform:  ${props => props.isActive ? 'scale(1.2)' : 'none'};
  background-color: ${props => props.color };

`