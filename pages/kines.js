import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';
import Axios from "axios";
import {useRouter} from 'next/router'
import React, { useState, useEffect } from 'react';





const Kines = (props) => {
  const [kines, setKines] = useState();
  const [params, setParams] = useState({gender: '',ville: ''});
  var queryparams
  const getParams = async (gender = null , ville = null) => {
    queryparams = {}
    if(gender)
    {queryparams["gender"]=gender
  setParams({...params,gender:gender})}
    if(ville)
    {queryparams["ville"]=ville
    setParams({...params,ville:ville})}
  }
  const clearFitlers = () => {
    console.log("called");
    setParams({gender: '',ville: ''});
  }
  useEffect(() => {
    (async function getData(){
      const res = await Axios.get("http://localhost:3001/user/kine/filter", {
        params: {gender:params["gender"],
        ville:params["ville"]}
      })
    setKines(res.data.slice(0, 10))
    })()
  }, [params])
  return (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <ProductsFilter getParamsCallback={getParams} clearFilters={clearFitlers} />
        <ProductsContent users={kines || props.data} />
      </div>
    </section>
    <Footer />
  </Layout>
)}
  
export default Kines

export async function getStaticProps() {
  console.log('called');
  const res = await Axios.get("http://localhost:3001/user/kine/filter", );
  return {
    props: { data: res.data.slice(0, 10) },
  };

};
  