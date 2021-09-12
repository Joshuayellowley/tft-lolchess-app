import './App.css';
import Home from './pages/Home'
import Summoner from "./pages/Summoner"
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/summoner' component={Summoner} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
