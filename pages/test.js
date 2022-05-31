import Axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Test = (props) => {
  const posts = props.data;
  console.log(posts);
  return (
    <div>
    
      <h1>Home</h1>
      <ol>
        {posts[0].map((post) => (
         
           <>
              <h1>{post.nom}</h1>
              <h1>{post.password}</h1>
              </>
          
        ))}
      </ol>
    </div>
  );
};

export default Test;

export const getStaticProps = async () => {
  const res = await Axios.get("http://localhost:3001/user/kine/filter");
  return {
    props: { data: res.data.slice(0, 10) },
  };
};