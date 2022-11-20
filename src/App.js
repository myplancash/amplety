import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Blog from './components/blog/Blog';

function App() {
  return (
    <Router>
      <div className='App'>
       <Navbar/>
       <div className='container'>
          <Routes>
            <Route exact path='/' element={<Header />} />
            <Route exact path='/blog' element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
