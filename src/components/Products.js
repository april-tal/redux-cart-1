import React, { Component } from 'react'
import store from '../store'
import styled from 'styled-components'

class Products extends Component {
  handleClick = productId => {
    store.dispatch({ type: 'ADD_TO_CART', productId })
  }

  render() {
    const { products } = store.getState()
    console.log(store.getState())
    const productList = products.map(t => (
      <ProductWrap key={t.id}>
        <div>
          {t.name}
        </div>
        <Button onClick={() => this.handleClick(t.id)} >购买</Button>
      </ProductWrap>)
    )
    return (
      <Wrap>
        <Title> 所有商品 </Title>
        <ProductList>
          {productList}
        </ProductList>
      </Wrap>
    )
  }
}

export default Products

const Wrap =  styled.div`
  background: #00bcd4;
`

const Title = styled.div`
  padding: 40px;
  text-align: center;
  color: white;
`

const ProductList = styled.div`
  display: flex;
  border: 2px solid red;
  justify-content: space-around;
`

const ProductWrap = styled.div`
  border: 2px solid green;
  background: white;
  padding: 40px;
  min-height: 150px;
`

const Button = styled.button`
  background-color: #FF5722;
  color: white;
  text-align: center;
  border-radius: 3px;
  line-height: 2;
  padding: 3px 30px;
  border: 0;
`