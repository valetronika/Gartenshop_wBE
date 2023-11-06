import React, { useEffect ,useRef} from 'react'
import s from './BannerSale.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/asyncActions/products';
import ProductList from '../ProductList/ProductList';
import ProductIem from '../ProductIem/ProductIem';

export default function BannerSale() {

    const discountedProducts = useSelector(state => state.products.productList)
    const dispatch = useDispatch()
    // const elementToScroll = useRef(null);
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    // console.log(discountedProducts);

  return (
    <div className={s.sale}>
        <h2 id='sale' >Sale</h2>

        <div className={s.sale__products}>
        <ProductList type={'demo'}/>
            {
                discountedProducts && discountedProducts
                .filter(el=> el.discont_price)
                .slice(0,3)
                .map(el=> <ProductIem product={el} type='itemOverView' key={el.id}/>)
            }
        </div>
    </div>
  )
}
