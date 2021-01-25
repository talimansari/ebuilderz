import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Footer from './components/Footer'
import Home from './components/Home';
function App() {
  return (
    <>
    <Header/>
    <Home/>
     <Footer/>  
    </>
  );
}

export default App;
