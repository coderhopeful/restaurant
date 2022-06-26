
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import {Container} from 'react-bootstrap'
import RestaurantDetails from './components/RestaurantDetails';
function App() {
  const name= "Arjun"
  return (
    <Router>
       <Header/>
     
    <main className="py-3">
    <Container>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/details/:id' element={<RestaurantDetails/>}/>

     </Routes>

     </Container>
    </main>
    </Router>
  );
}

export default App;
