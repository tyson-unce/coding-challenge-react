import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Products from './components/Products';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Howdy Y'all</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" component={App} />
          <Route path="/contactt" component={Contact}>
            <Contact />
          </Route>
          <Route path="/products/:id">
            <Products />
          </Route>
          <Route path="/products" component={Products}>
            <Products />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
