import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getProducts } from './api'
import ProductItem from './components/ProductItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleUp,
  faArrowLeft,
  faArrowRight,
  faTimesCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import useCountDown from './hooks/useCountDown'
import useSearch from './hooks/useSearch'
import useCarousel from './hooks/useCarousel'
import useFilter from './hooks/useFilter'

const PageBackground = styled.div`
  background-color: #f4f5f4;
`
const PageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

const SearchBarWrapper = styled.div`
  background-color: #e2e2e2;
  padding: 20px 10px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  ${(props) => !props.$isProductInfoOpen && `z-index: 3;`}
`
const SearchBar = styled.input`
  width: 80%;
  height: 40px;
  padding: 0px;
  color: black;
  border: none;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`
const CarouselWrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`
const Carousel = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`

const CarouselDotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
`
const CarouselDot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #e2e2e2;
  &:hover {
    cursor: pointer;
    background-color: gray;
  }
  ${(props) => props.$active && `background-color: gray;`}
`

const CountDown = styled.div`
  background-color: #e2e2e2;
  height: 5vh;
  margin: 10px 0px;
  padding: 10px;
  line-height: 5vh;
  color: gray;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`

const ProductsWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
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
    background-color: #e2e2e2;
  }
`
const ProductCardsWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
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
const FontAwesomeIconItem = styled(FontAwesomeIcon)`
  width: 30px;
  height: 40px;
  padding: 0 10px;
  background-color: white;
  ${(props) =>
    (props.$arrowLeft || props.$arrowRight) &&
    `
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,0.1);
    padding:10px;
    transition: .5s;
    &:hover{
      color: #f4f5f4;
      background-color: rgba(0,0,0,0.3);
    }
  `}
  ${(props) =>
    props.$arrowRight &&
    `
    right: 10px;
  `}
  ${(props) =>
    props.$arrowLeft &&
    `
    left: 10px;
  `}
  ${(props) =>
    props.$arrowUp &&
    `  
    position: fixed;
    bottom: 150px;
    right: 20px;
    background-color: transparent
  `}
`
const Loading = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 40px;
  position: fixed;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`
function App() {
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false)
  const [productInfos, setProductInfos] = useState([])
  const { countDown } = useCountDown()
  const [isLoading, setIsLoading] = useState(false)

  const {
    handleKeyWordChange,
    handleSearch,
    handleClearSearch,
    keyWord,
    filteredProducts,
  } = useSearch({ productInfos })
  const { adIdArr, handleCurrentAd, productAds, currentAd } = useCarousel({
    setIsLoading,
  })
  const { handleFilter } = useFilter({ setProductInfos, setIsLoading })

  useEffect(() => {
    setIsLoading(true)
    getProducts()
      .then((res) => {
        setProductInfos(res.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        alert('Oops, something went wrong!')
      })
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <PageBackground>
        <PageWrapper>
          {isLoading && <Loading> Now Loading ...</Loading>}
          <SearchBarWrapper $isProductInfoOpen={isProductInfoOpen}>
            <FontAwesomeIconItem
              icon={faSearch}
              size='lg'
              color='gray'
              onClick={handleSearch}
            />
            <SearchBar
              placeholder='please input keyword ...'
              onChange={(e) => {
                handleKeyWordChange(e)
              }}
              value={keyWord}
            />
            <FontAwesomeIconItem
              icon={faTimesCircle}
              size='lg'
              color='gray'
              onClick={handleClearSearch}
            />
          </SearchBarWrapper>
          <CarouselWrapper
            onClick={(e) => {
              handleCurrentAd(e)
            }}
          >
            <FontAwesomeIconItem
              icon={faArrowLeft}
              size='5x'
              color='gray'
              $arrowLeft
              name='left'
            />
            <Carousel
              src={
                productAds.length !== 0
                  ? productAds.find((ad) => ad.id === currentAd).url
                  : null
              }
            />
            <CarouselDotContainer>
              {adIdArr.map((id) => (
                <CarouselDot key={id} id={id} $active={id === currentAd} />
              ))}
            </CarouselDotContainer>
            <FontAwesomeIconItem
              icon={faArrowRight}
              size='5x'
              color='gray'
              $arrowRight
              name='right'
            />
          </CarouselWrapper>
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
                      isProductInfoOpen={isProductInfoOpen}
                      setIsProductInfoOpen={setIsProductInfoOpen}
                    />
                  ))
                : filteredProducts.map((product) => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      isProductInfoOpen={isProductInfoOpen}
                      setIsProductInfoOpen={setIsProductInfoOpen}
                    />
                  ))}
            </ProductCardsWrapper>
          </ProductsWrapper>
          <Mask $isProductInfoOpen={isProductInfoOpen} />
          <FontAwesomeIconItem
            icon={faArrowCircleUp}
            size='8x'
            color='gray'
            $arrowUp
            onClick={handleBackToTop}
          />
        </PageWrapper>
      </PageBackground>
    </>
  )
}

export default App
