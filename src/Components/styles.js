import styled from "styled-components";

const Button = styled.button`
margin-right: 15px;
background-color: white;
border: 1px solid grey;
width: 75px;
height: 20px;

&:first-letter {
    text-transform: uppercase;
}
`
const List = styled.ul`
& li {
    list-style:none;
    border-bottom: 1px solid grey;
    margin-bottom: 15px;
}

`

export {Button, List}