import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';
import Axios from "axios";

const Kines = (props) => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <ProductsFilter />
        <ProductsContent users={props.data} />
      </div>
    </section>
    <Footer />
  </Layout>
)
  
export default Kines

export const getStaticProps = async () => {
  const res = await Axios.get("http://localhost:3001/user/kine/filter");
  return {
    props: { data: res.data.slice(0, 10) },
  };
};
  