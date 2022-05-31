import Link from 'next/link';
import { some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from './../../store/actions/userActions';

const ProductItem = ({ productImage, id, name,lastname, price, currentPrice, numero }) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector(state => state.user);
  const isFavourite = some(favProducts, productId => productId === id);
  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id,
      }
    ))
  }

  return (
    <div className="product-item">
      <div className="product__image">

        <Link href={`/product/${id}`}>
          <a>
            <img src={ productImage} alt="product" />
          </a>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{name + " " + lastname}</h3>
        <h2>contact : {numero}</h2>
      </div>
    </div>
  )
};


export default ProductItem