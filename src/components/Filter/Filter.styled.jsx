import styled from 'styled-components';

export const FilterBox= styled.div`
    position: relative;
    margin: 25px;
`

export const Label= styled.label`
    position: absolute;
    top:0;
    left:0;
`

export const Input = styled.input`
   height:25px;
   padding:2px;
   :hover ~ ${Label}, :focus ~ ${Label}, :not(:placeholder-shown) ~ ${Label} {
        color: #443cb9;
       transform: translateY(-20px);
   }
`