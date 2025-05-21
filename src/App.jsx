import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cover from './pages/Cover'
import Index from './pages/Index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Unit1SelfIntro from './pages/units/Unit1SelfIntro';
import Unit2GroupChat from './pages/units/Unit2GroupChat';
import Unit3DeskTour from './pages/units/Unit3DeskTour';
import Unit4MovieNightPrep from './pages/units/Unit4MovieNightPrep';
import Unit5StationeryShop from './pages/units/Unit5StationeryShop';
import Unit6TravelFlashbacks from './pages/units/Unit6TravelFlashbacks';

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/index" element={<Index />} />
          <Route path="/unit1" element={<Unit1SelfIntro />} />
          <Route path="/unit2" element={<Unit2GroupChat />} />
          <Route path="/unit3" element={<Unit3DeskTour />} />
          <Route path="/unit4" element={<Unit4MovieNightPrep />} />
          <Route path="/unit5" element={<Unit5StationeryShop />} />
          <Route path="/unit6" element={<Unit6TravelFlashbacks />} />
          {/* Añade las rutas para las otras unidades y conclusiones aquí */}
          {/* <Route path="/unidad2" element={<Unidad2_Ilsangsaenghwal />} /> */}
          {/* <Route path="/conclusiones" element={<Conclusiones />} /> */}
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
