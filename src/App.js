import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Catalog from './components/Catalog'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <img className="App-logo" src={logo} alt="" srcset=""/>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
          </div>
          <div className='routes'>
            <Route path="/" exact component={Home}/>
            <Route path="/catalog" exact render={() => <Catalog />} />
            {/* <Route path="/directory/:fentities" exact render={({ match }) => <Fentities match={match} state={state} />}/>
            <Route path="/directory/:fentities/:name" exact render={({ match }) => <Fentity match={match} state={state} />}/> */}
          </div>
        </Router>
      </header>
    </div>
  )
}

export default App;
