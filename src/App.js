import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar'
import Google from './components/Google/google'
import Search from './components/Search/search.js'
import Buttons from './components/SearchButtons/buttons.js'
import Footer from './components/Footer/Footer.js'
function App() {
  return ( 
    <>
    <Navbar />
    <Google />
    <Search /> 
    <Buttons />
    <Footer />

   </>
  )
    
  
}

export default App;
