import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto ;
  width: 90%;
  max-width: 680px;
  background-color: var(--white-ice);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 44px;
  margin: 50px 0 30px;
`

export const Field = styled.input`
  width: 100%;
  max-width: 430px;
  font-size: 12px;   
  margin: 10px 0;
  width: 250px;  
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  background-color: var(--white-ele);
`

export const LinkStyled = styled.div`
  width: 250px;
  text-align: end;
  a {
    font-size: 11px;
  }
`

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  margin: 30px 0 50px;
  padding: 6px 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
  background-color: var(--white-ele);
  cursor: pointer;
  :active {
    box-shadow: none;
    outline: none;
    transform: translateY(3px);
  };
`