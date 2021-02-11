
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import  HeaderItems from "./components/HeaderItems";
import Home from "./components/Home";
import Yazilar from './components/Yazilar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  
  return (
    <>
    <Router>
      <HeaderItems /> 

      <main>
        <section>
          <Switch>
            <Route path="/blog" component={Yazilar} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
      </main>
    </Router>
    </>
  );
}

export default App;
