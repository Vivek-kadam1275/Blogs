import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pageinitiaton from './components/Pageinitiation';

function App() {
  return (
    <div className='flex flex-col items-center'>
        <Header />
        <Blogs />
        <Pageinitiaton/>
       
    </div>
  );
}

export default App;
