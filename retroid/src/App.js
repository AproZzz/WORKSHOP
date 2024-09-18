import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Panier from './screens/panier';
import ProductList from './screens/product_list';
import ProductDetails from './screens/product_details';
import Fondsecrans from './screens/fonds-ecrans';
import Carousel1 from './screens/acc_component/caroussel';
import Navbar from './Navbar';  // Importer le composant Navbar
import Block2 from './screens/acc_component/block2';

export default function App() {
  return (
    <Router>
      <div >
      <Navbar />  {/* Navigation */}
      </div>
      <main>
        <Routes>
          {/* Carousel uniquement sur la page d'accueil */}
          <Route path="/" element={
            <>
              <Carousel1 />
              <Block2 />
            </>
          } />

          {/* Route pour le panier */}
          <Route path="/panier" element={<Panier />} />

          {/* Route pour la liste des produits */}
          <Route path="/product-list" element={<ProductList />} />

          {/* Route pour les détails du produit */}
          <Route path="/product-details" element={<ProductDetails />} />

          {/* Route pour les fonds d'écran */}
          <Route path="/fonds-ecrans" element={<Fondsecrans />} />
        </Routes>
      </main>
    </Router>
  );
}
