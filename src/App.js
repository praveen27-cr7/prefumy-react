import Navbar from './Components/Navbar';
import Serach from './Components/Search';
import Products from './Components/Products'; 
import About from './Components/About';
import Footer from './Components/Footer';

export default function App(){
    return(
        <>
            <Navbar />
            <Serach />
            <Products />
            <About />
            <Footer />
        </>
    )
}