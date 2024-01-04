import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const {data, isLoading, error} = useFetch('http://localhost:8000/blogs')

  return ( 
    <>
      <div className="home">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && <BlogList blogs={data} title='All blogs'  />}
    </div>
      </>
   );
}
 
export default Home;