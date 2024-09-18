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

// Définir un schéma et un modèle Mongoose pour les produits
const productSchema = new mongoose.Schema({
  name: String,
  prix: String,
});
const Product = mongoose.model('Product', productSchema);

// Définir un schéma et un modèle Mongoose pour les options de produit
const optionSchema = new mongoose.Schema({
  name: String,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Faire référence au modèle Product
  },
  colors: [String], // Ajout d'un champ pour les couleurs
});
const Option = mongoose.model('Option', optionSchema);

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

// Route POST pour ajouter une option à un produit
app.post('/options', async (req, res) => {
  const { name, productId } = req.body;

  if (!name || !productId) {
    return res.status(400).send('Nom et ID du produit requis');
  }

  try {
    const newOption = new Option({
      name,
      productId,
    });
    await newOption.save();
    res.status(201).json(newOption);
  } catch (error) {
    res.status(500).send('Erreur lors de la création de l\'option');
  }
});

// Route GET pour récupérer les options d'un produit
app.get('/options', async (req, res) => {
  const productId = req.query.productId;
  if (!productId) {
    return res.status(400).send('Product ID is required');
  }

  try {
    const options = await Option.find({ productId: productId });
    if (!options.length) {
      return res.status(404).send('No options found for this product');
    }
    res.status(200).json(options);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route PUT pour mettre à jour un produit
app.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        prix: req.body.prix,
      },
      { new: true } // Retourner le document mis à jour
    );
    if (!updatedProduct) {
      return res.status(404).send('Produit non trouvé');
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).send('Erreur lors de la mise à jour du produit');
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

// Route GET pour récupérer un produit par ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Produit non trouvé');
    }
    res.json(product);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération du produit');
  }
});

// Route GET pour récupérer les options liées à un produit
app.get('/products/:id/options', async (req, res) => {
  try {
    const options = await Option.find({ productId: req.params.id });
    res.json(options);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des options');
  }
});

// Route POST pour ajouter des couleurs à une option
app.post('/colors', async (req, res) => {
  const { optionId, colors } = req.body;

  try {
    const option = await Option.findById(optionId);
    if (!option) {
      return res.status(404).send('Option non trouvée');
    }

    // Ajouter les couleurs à l'option
    option.colors = colors;
    await option.save();

    res.status(200).json(option);
  } catch (error) {
    res.status(500).send('Erreur lors de l\'ajout des couleurs');
  }
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
