import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {

  const { id } = useParams();

  const { data: blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)


  const history = useHistory();


  const deleteBlog = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method :'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  
  return ( 
    <div className="blog-details">
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={deleteBlog}>Delete blog</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;