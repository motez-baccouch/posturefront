import ProductsCarousel from './carousel';
import useSwr from 'swr';

const ProductsFeatured = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="/kines" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured