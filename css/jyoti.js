mport {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import Contect from './pages/Contect';
import Login from './pages/Login';
import Footer from './components/Footer';
import Table from './components/Table';
import Auth from './pages/Auth';


function App(){
    return <>
      <Router>
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contect">Contact</Link></li>
            <li><Link to="/Login"><button class="btn btn-primary">Login</button></Link></li>
            <li><Link to="/ContactForm"><button class="btn btn-primary">ContactForm</button></Link></li>
          </ul>
        </div>
      </div>
    </nav>
 
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Contect" component={Contect}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/ContactForm" component={ContactForm}></Route>
            <Route path="/Auth" component={Auth}></Route>
            <Route path="/Table" component={Table}></Route>
       </Switch>
   </Router>
   <Footer/>
    </>;    
}

export default App;
