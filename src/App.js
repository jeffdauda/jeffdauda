import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Blog from './blog.js';
import Projects from './projects.js';
import About from './about.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Route exact path="/" component={Blog} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />

        <div className="navigation">
            
        <img src ={logo} className="logo-image" alt="Image"/>
        <div className="navigation-sub">
          <Link to="/" className='item'>Blog</Link>
          <Link to="/projects" className='item'>Projects</Link>
          <Link to="/about" className='item'>About</Link>
        </div>

        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
