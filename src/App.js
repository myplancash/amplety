import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import Posts from './components/Posts/Posts';


function App() {
  return (
    <Router>
      <div className='App'>
       <Navbar/>
       <div className='container'>
          <Routes>
            <Route exact path='/' element={<Header />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/posts' element={<Posts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
