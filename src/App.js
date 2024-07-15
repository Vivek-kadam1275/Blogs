import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pageinitiaton from './components/Pageinitiation';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='flex flex-col items-center'>
        <Header />
        <Blogs />
        <Pageinitiaton/>
        <ToastContainer/>
       
    </div>
  );
}

export default App;
