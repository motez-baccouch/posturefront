import { useState } from 'react';
import List from './list';
import Axios from "axios";

const ProductsContent = (props) => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  const users = props.data;
  console.log(users);
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Kines </h2>
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
        </form>
      </div>
      <List />
    </section>
  );
};
  
export default ProductsContent

export const getStaticProps = async () => {
  const res = await Axios.get("http://localhost:3001/user/kine/filter");
  return {
    props: { data: res.data.slice(0, 10) },
  };
};
  