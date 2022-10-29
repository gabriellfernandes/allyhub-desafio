import styled from "styled-components"

export const Button = styled.button`
    padding: 0.5rem;
    background-color: var(--buttonColor);
    border-radius: 16px;
    color: white;

    &:hover{
        filter: brightness(0.8);
    }
`