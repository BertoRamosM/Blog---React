import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Error = () => {
  return ( 
    <>
    <h1>Page dosn't exists</h1>
      <Link to="/">Back to the home page</Link>
      </>
   );
}
 
export default Error;