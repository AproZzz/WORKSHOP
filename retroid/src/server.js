const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Configuration de multer pour enregistrer les fichiers (si nécessaire)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/workshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));

// Définir un schéma et un modèle Mongoose
const productSchema = new mongoose.Schema({
  name: String,
  prix: String,
});
const Product = mongoose.model('Product', productSchema);

// Route POST pour ajouter un produit
app.post('/products', upload.single('image'), async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    prix: req.body.prix,
  });
  await newProduct.save();
  res.json(newProduct);
});

// Route GET pour récupérer tous les produits
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des produits');
  }
});

// Route DELETE pour supprimer un produit par ID
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send('Produit non trouvé');
    }
    res.status(200).send('Produit supprimé avec succès');
  } catch (error) {
    res.status(500).send('Erreur lors de la suppression du produit');
  }
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
