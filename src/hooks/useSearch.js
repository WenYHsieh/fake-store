import { useState } from 'react'

export default function useSearch({ productInfos }) {
  const [keyWord, setKeyWord] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

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

  const handleClearSearch = () => {
    setKeyWord('')
  }

  return {
    handleKeyWordChange,
    handleSearch,
    handleClearSearch,
    keyWord,
    filteredProducts,
  }
}
