import { useEffect, useState } from 'react'
import { getProductAds } from '../api'

export default function useCarousel({ setIsLoading }) {
  const [productAds, setProductAds] = useState([])
  const adIdArr = [0, 160, 250, 30, 312, 367, 486, 535, 662, 669]
  const [currentAd, setCurrentAd] = useState(0)
  let adUrls = []

  useEffect(() => {
    setIsLoading(true)
    adIdArr.forEach((id) => {
      getProductAds(id)
        .then((res) => {
          adUrls.push({ id, url: res.data.download_url })
        })
        .catch(() => {
          alert('Oops, something went wrong!')
        })
    })
    setProductAds(adUrls)
    setIsLoading(false)
  }, [])

  const handleCurrentAd = (e) => {
    if (e.target.getAttribute('id'))
      setCurrentAd(parseInt(e.target.getAttribute('id')))

    let currentAdIndex = adIdArr.indexOf(currentAd)
    if (
      e.target.getAttribute('name') === 'left' ||
      e.target.parentNode.getAttribute('name') === 'left'
    ) {
      currentAdIndex > 0
        ? setCurrentAd(parseInt(adIdArr[currentAdIndex - 1]))
        : setCurrentAd(parseInt(adIdArr[9]))
    }
    if (
      e.target.getAttribute('name') === 'right' ||
      e.target.parentNode.getAttribute('name') === 'right'
    ) {
      currentAdIndex < 9
        ? setCurrentAd(parseInt(adIdArr[currentAdIndex + 1]))
        : setCurrentAd(parseInt(adIdArr[0]))
    }
  }
  return {
    adIdArr,
    handleCurrentAd,
    productAds,
    currentAd,
  }
}
