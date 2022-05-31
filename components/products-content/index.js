import { useState } from 'react';
import List from './list';
import Axios from "axios";

const ProductsContent = (props) => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  const users = props.users;
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Kines </h2>
      </div>
      <List users={users} />
    </section>
  );
};
  
export default ProductsContent

  