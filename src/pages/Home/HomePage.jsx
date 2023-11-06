import React from 'react'
import Banner from '../../components/Banner/Banner'
import Catalog from '../../components/CatalogItem/CatalogItem'
import Offer from '../../components/Offer/Offer'
import BannerSale from '../../components/BannerSale/BannerSale'

export default function HomePage() {
  return (
    <div>
      <Banner/>
      <Catalog />
      <Offer/>
      <BannerSale/>
    </div>
  )
}
