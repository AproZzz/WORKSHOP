import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Panier from './screens/panier';
import ProductList from './screens/product_list';
import ProductDetails from './screens/product_details';
import Fondsecrans from './screens/fonds-ecrans';
import Carousel1 from './screens/acc_component/caroussel';
import CreateProduct from './screens/createProduct';
import Navbar from './Navbar';  // Importer le composant Navbar
import Block2 from './screens/acc_component/block2';
import CustomisationCards from './screens/acc_component/CustomisationCards';
import Footer from './screens/acc_component/footer';

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
              <CustomisationCards />
              <Footer />
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
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </main>
    </Router>
  );
}
