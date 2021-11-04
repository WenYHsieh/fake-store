import { useState, useEffect } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  background-color: gray;
`

const SearchBarWrapper = styled.div`
  background-color: #cbeafa;
  padding: 20px 10px;
`
const SearchBar = styled.input`
  width: 80%;
  height: 35px;
`
const CarouselWrapper = styled.div`
  border: 1px solid black;
  background-color: white;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Carousel = styled.img`
  min-width: 90%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`
const ArrowLeft = styled.div`
  width: 10px;
  height: 10px;
  background-color: blue;
`
const CountDown = styled.div`
  border: 1px solid black;
  background-color: white;
  height: 5vh;
  margin: 10px 0px;
`

const ProductsWrapper = styled.div`
  display: flex;
`
const ProductsFilterWrapper = styled.div`
  margin: 10px 20px 0px 0px;
`
const ProductsFilter = styled.div`
  width: 150px;
  padding: 10px;
  height: 30px;
  text-align: center;
  color: gray;
  &:hover {
    cursor: pointer;
    background-color: #cbeafa;
  }
`
const ProductCardsWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`
const ProductCard = styled.div`
  width: 180px;
  height: 180px;
  border: 1px solid black;
  margin: 10px;
  overflow: hidden;
  &:before {
    content: '';
    background-color: none;
    transition: 0.5s;
  }
  &:hover {
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  position: relative;
`
const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
  ${(props) =>
    props.$isInfoWindow &&
    `
    width: 50%
  `}
`
const ProductTitle = styled.div`
  width: 100%;
  height: 20px;
  color: black;
  font-weight: bold;
  padding: 5px;
  ${(props) =>
    !props.$isInfoWindow &&
    `
    width: 100%;
    height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    position: absolute;
    bottom: 10px;
    padding: 3px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
  `};
`
const ProductInfoWindow = styled.div`
  width: 450px;
  height: 450px;
  border: 1px solid gray;
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: none;
  padding: 10px;
  ${(props) => props.$isProductInfoOpen && `display:block`}
`

const ProductInfo = styled.div`
  ${(props) =>
    props.$isInfoWindow &&
    `
    padding:10px;
    display: flex;
    border-bottom: 1px solid gray
    
  `}
`
const ProductDesc = styled.div`
  width: 80%;
  margin: 20px auto 0px auto;
  overflow: scroll;
`
const ProductStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`
const CloseBtn = styled.div`
  width: 10px;
  height: 10px;
  margin-bottom: 10px;
  position: relative;
  top: 10px;
  left: 10px;
  transition: 0.5s;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`
const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  ${(props) => props.$isProductInfoOpen && `display:block`}
`

function App() {
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false)
  const testProduct = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ]
  const handleProductOnClick = (displayMode) => {
    if (displayMode) return setIsProductInfoOpen(!isProductInfoOpen)
    setIsProductInfoOpen(false)
  }
  return (
    <>
      <PageWrapper>
        <button
          onClick={() => {
            console.log(isProductInfoOpen)
          }}
        >
          debug
        </button>
        <HeaderWrapper>
          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
          <CarouselWrapper>
            <ArrowLeft />
            <Carousel src='https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80' />
            <ArrowLeft />
          </CarouselWrapper>
        </HeaderWrapper>
        <CountDown>倒數</CountDown>
        <ProductsWrapper>
          <ProductsFilterWrapper>
            <ProductsFilter> Electronics</ProductsFilter>
            <ProductsFilter> Jewelery</ProductsFilter>
            <ProductsFilter> Men's clothing</ProductsFilter>
            <ProductsFilter> Women's clothing</ProductsFilter>
          </ProductsFilterWrapper>
          <ProductCardsWrapper>
            <ProductCard onClick={handleProductOnClick}>
              <ProductImg src={testProduct[0].image} />
              <ProductTitle>{testProduct[0].title}</ProductTitle>
            </ProductCard>
            <ProductInfoWindow $isProductInfoOpen={isProductInfoOpen}>
              <CloseBtn onClick={() => handleProductOnClick(false)}>X</CloseBtn>
              <ProductInfo $isInfoWindow>
                <ProductImg src={testProduct[0].image} $isInfoWindow />
                <ProductStatus>
                  <ProductTitle $isInfoWindow>
                    {testProduct[0].title}
                  </ProductTitle>
                  <div>
                    Price: $ {testProduct[0].price}
                    <br />
                    In stock: {testProduct[0].rating.count}
                  </div>
                </ProductStatus>
              </ProductInfo>
              <ProductDesc $isInfoWindow>
                {testProduct[0].description}
              </ProductDesc>
            </ProductInfoWindow>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
            <ProductCard>商品</ProductCard>
          </ProductCardsWrapper>
        </ProductsWrapper>
        <Mask $isProductInfoOpen={isProductInfoOpen} />
      </PageWrapper>
    </>
  )
}

export default App
