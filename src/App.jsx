import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home'
import Market from './pages/Market'
import Login from './pages/Login'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Info from './pages/info';





function App() {
  return (
    <Router>
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/info" element={<Info />} /> 

        
      </Routes> 
        {/* <section className="py-12 px-4">
          <div className="space-y-8">
            <ProductCard /> 
            <ProductCard reverse={true} /> 
          </div>
          <Slider />
        </section> 

        {/* <Home /> */}
        
        <Footer />
      </main>
    </div>
    </Router>
  );
}

export default App;