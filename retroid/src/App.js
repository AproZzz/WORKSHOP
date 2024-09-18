import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Panier from './screens/panier';
import ProductList from './screens/product_list';
import ProductDetails from './screens/product_details';
import Fondsecrans from './screens/fonds-ecrans';
import Carousel1 from './screens/caroussel';
import Navbar from './Navbar';  // Importer le composant Navbar

export default function App() {
  return (
    <Router>
      <Navbar />  {/* Navigation */}
      
      <main>
        <Routes>
          {/* Carousel uniquement sur la page d'accueil */}
          <Route path="/" element={
            <>
              <Carousel1 />
              <h1>Welcome to the Homepage</h1>
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
