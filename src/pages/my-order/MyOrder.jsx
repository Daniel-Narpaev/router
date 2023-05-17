import React from 'react'
import Header from '../../components/header/Header'
import styled from 'styled-components'
import Button from '../../components/UI/Button'

const MyOrder = () => {
  return (
    <div> 
        <Header/>
    <Container>
        <Title>
        <h2>My Order</h2>
        </Title>
        <Button>GO BACK</Button>
    </Container></div>
  )
}

export default MyOrder

const Container = styled.div`
    margin: 30px 0 0 220px;
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:space-between;

`
const Title = styled.div`
    background-color: #fff;
    width: 900px;
    padding: 0 0 20px 10px ;
    margin-bottom: 20px;
`