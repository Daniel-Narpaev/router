import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = ({ left }) => {
    const navigate = useNavigate()

    const goback = () => navigate(-1)
  return (
    <StyledButton style={{marginLeft:left}} onClick={goback}>GO BACK</StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
    background-color: #2a969e;
    width: 110px;
    border: none;
    border-radius: 16px;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
`