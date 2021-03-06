import styled from 'styled-components'

export const JoinOuterContainer = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1A1A1D;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`

export const JoinInnerContainer = styled.section`
  width: 20%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`

export const Heading = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`

export const JoinInput = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;

  &&:focus{
    outline: 0;
  }
`

export const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979FF;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;
  cursor: pointer;

  &&:focus{
    outline: 0;
  }
`