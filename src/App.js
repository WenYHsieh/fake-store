import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getProducts, getProductsInCategory } from './api'
import ProductItem from './components/ProductItem'

const PageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  background-color: gray;
`

const SearchBarWrapper = styled.div`
  background-color: azure;
  padding: 20px 10px;
  position: sticky;
  top: 0;
`
const SearchBar = styled.input`
  width: 80%;
  padding: 10px;
  color: gray;
  &:focus {
    outline: none;
  }
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
  background-color: azure;
  height: 5vh;
  margin: 10px 0px;
  padding: 10px;
  line-height: 5vh;
  color: gray;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
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
  line-height: 30px;
  &:hover {
    cursor: pointer;
    background-color: azure;
  }
`
const ProductCardsWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
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
  const [productInfos, setProductInfos] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentOnClickId, setCurrentOnClickId] = useState(null)
  const [countDown, setCountDown] = useState('')
  const [keyWord, setKeyWord] = useState('')

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProductInfos(res.data)
      })
      .catch(() => {
        alert('Oops, something went wrong!')
      })
  }, [])

  const handleProductOnClick = (props) => {
    if (typeof props === 'boolean') return setIsProductInfoOpen(false)
    setCurrentOnClickId(parseInt(props.target.id))
    setIsProductInfoOpen(!isProductInfoOpen)
  }

  const handleFilter = (e) => {
    let currentFilter = e.target.getAttribute('name')
    getProductsInCategory(currentFilter)
      .then((res) => {
        setProductInfos(res.data)
      })
      .catch(() => {
        alert('Oops, something went wrong!')
      })
  }

  const handleKeyWordChange = (e) => {
    setKeyWord(e.target.value)
  }

  const handleSearch = () => {
    setFilteredProducts(
      productInfos.filter((product) => {
        return product.title.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
      })
    )
  }

  const countDownDate = new Date('Jan 1, 2022 22:22:22').getTime()
  useEffect(() => {
    let handleCountDown = setInterval(() => {
      let now = new Date().getTime()
      let distance = countDownDate - now
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountDown(`${days}d ${hours}h ${minutes}m ${seconds}s`)

      if (distance < 0) {
        clearInterval(handleCountDown)
        setCountDown('Happy new year~')
      }
    }, 1000)
    return () => clearInterval(handleCountDown)
  }, [countDownDate])

  return (
    <>
      <PageWrapper>
        <SearchBarWrapper>
          <SearchBar
            placeholder='please input keyword ...'
            onChange={(e) => {
              handleKeyWordChange(e)
            }}
          />
          <button onClick={handleSearch}>search</button>
        </SearchBarWrapper>
        <HeaderWrapper>
          <CarouselWrapper>
            <ArrowLeft />
            <Carousel src='https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80' />
            <ArrowLeft />
          </CarouselWrapper>
        </HeaderWrapper>
        <CountDown>{countDown}</CountDown>
        <ProductsWrapper>
          <ProductsFilterWrapper
            onClick={(e) => {
              handleFilter(e)
            }}
          >
            <ProductsFilter name='electronics'>Electronics</ProductsFilter>
            <ProductsFilter name='jewelery'> Jewelery</ProductsFilter>
            <ProductsFilter name="men's clothing">
              Men's clothing
            </ProductsFilter>
            <ProductsFilter name="women's clothing">
              Women's clothing
            </ProductsFilter>
          </ProductsFilterWrapper>
          <ProductCardsWrapper>
            {filteredProducts.length === 0
              ? productInfos.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    handleProductOnClick={handleProductOnClick}
                    isProductInfoOpen={isProductInfoOpen}
                    currentOnClickId={currentOnClickId}
                  />
                ))
              : filteredProducts.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    handleProductOnClick={handleProductOnClick}
                    isProductInfoOpen={isProductInfoOpen}
                    currentOnClickId={currentOnClickId}
                  />
                ))}
          </ProductCardsWrapper>
        </ProductsWrapper>
        <Mask $isProductInfoOpen={isProductInfoOpen} />
      </PageWrapper>
    </>
  )
}

export default App
