import styled from 'styled-components'

const ProductCard = styled.div`
  width: 180px;
  height: 200px;
  border: 1px solid gray;
  margin: 20px 10px;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    height: 35px;
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
  height: 500px;
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
    height: 50%;
    display: flex;
    border-bottom: 1px solid gray
    
  `}
`
const ProductDesc = styled.div`
  width: 80%;
  height: 30%;
  margin: 20px auto 0px auto;
  overflow: scroll;
`
const ProductStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  color: gray;
`
const CloseBtn = styled.div`
  width: 10px;
  height: 10px;
  margin-bottom: 10px;
  position: relative;
  top: 5px;
  left: 10px;
  transition: 0.5s;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`

export default function ProductItem({
  product,
  handleProductOnClick,
  isProductInfoOpen,
  currentOnClickId,
}) {
  return (
    <>
      <ProductCard
        onClick={(e) => {
          handleProductOnClick(e)
        }}
        id={product.id}
      >
        <ProductImg src={product.image} />
        <ProductTitle id={product.id}>{product.title}</ProductTitle>
      </ProductCard>
      <ProductInfoWindow
        $isProductInfoOpen={
          isProductInfoOpen && product.id === currentOnClickId
        }
      >
        <CloseBtn onClick={() => handleProductOnClick(false)}>X</CloseBtn>
        <ProductInfo $isInfoWindow>
          <ProductImg src={product.image} $isInfoWindow />
          <ProductStatus>
            <ProductTitle $isInfoWindow>{product.title}</ProductTitle>
            <div>
              Price: $ {product.price}
              <br />
              In stock: {product.rating.count}
            </div>
          </ProductStatus>
        </ProductInfo>
        <ProductDesc $isInfoWindow>{product.description}</ProductDesc>
      </ProductInfoWindow>
    </>
  )
}
