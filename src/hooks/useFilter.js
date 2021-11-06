import { getProductsInCategory } from '../api'

export default function useFilter({ setProductInfos, setIsLoading }) {
  const handleFilter = (e) => {
    let currentFilter = e.target.getAttribute('name')
    setIsLoading(true)
    getProductsInCategory(currentFilter)
      .then((res) => {
        setProductInfos(res.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        alert('Oops, something went wrong!')
      })
  }
  return { handleFilter }
}
