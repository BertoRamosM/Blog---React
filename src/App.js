import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Error from './Error';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
             <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
{/*             always on the bottom
 */}             <Route path="*">
              <Error />
            </Route>
        </Switch>
      </div>
      </div>
      </Router>
  );
}

export default App;
