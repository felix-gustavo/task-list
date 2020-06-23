import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 69px auto;
  width: 50%;
  max-width: 800px;
  background: linear-gradient(#0a4b85, #862590);
`;

export const Title = styled.h1`
  font-size: 3.6rem;
`

export const Field = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  margin: 9px 0px;
  width: 50%;
  :hover {
    transform: scale(1.03);
    transition: transform .1s;
  };
  input { 
    height: 40px;
    font-size: 1rem; 
  };
`

export const LinkStyled = styled(Link)`
  color: white;
`

export const Button = styled.button`
  margin: 35px;
  margin-bottom: 50px;
  font-size: 1rem;
  padding: 5px 15px;
  border: 2px solid #C4EBC8;
  background: none;
  color: white;
  :hover {
    transform: scale(1.13);
    transition: transform .1s;
  }
`