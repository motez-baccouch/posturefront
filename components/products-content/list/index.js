import useSwr from 'swr';
import ProductItem from './../../product-item';
import ProductsLoading from './loading';

const ProductsContent = (props) => {
  const users = props.users
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/products', fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!users && 
        <ProductsLoading />
      }

      {users &&
        <section className="products-list">
          {users[0].map(item => (
            <ProductItem 
              id={item.id} 
              productImage={item.photoUrl} 
              name={item.prenom}
              lastname={item.nom}
              numero={item.numero}
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent