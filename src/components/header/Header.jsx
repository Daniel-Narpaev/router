import React from 'react'
import styled from 'styled-components'
import Navigation from '../navigation/Navigation'

const Header = () => {
  return (
    <StyledHeader>
        <h1>iStore</h1>
        <Navigation/>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
    width: 1366px;
    height: 80px;
    padding: 0px 50px;
    background-color: #0077ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    h1{
        font-size: 2.5rem;
        margin: 0;
    }
`
