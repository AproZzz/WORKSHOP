import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import colorsList from './colors'; // Importez les couleurs
import { FaTruck, FaBox, FaShoppingBag } from 'react-icons/fa';
import dragCursor from '../img/drag.png'; // Importer l'image pour le curseur
import images from '../img/GB/FRONT/index'; // Assurez-vous que le chemin est correct

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [options, setOptions] = useState([]);
    const [error, setError] = useState(null);
    const [selectedImages, setSelectedImages] = useState({
        Pads: null,
        Coque: null,
        Ips: null,
        Boutons: null,
    });

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productResponse = await axios.get(`http://localhost:5000/products/${id}`);
                setProduct(productResponse.data);

                const optionsResponse = await axios.get(`http://localhost:5000/products/${id}/options`);
                setOptions(optionsResponse.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails du produit:", error);
                setError('Erreur lors de la récupération des détails du produit');
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleColorClick = (category, color) => {
        const imageMapping = {
            Boutons: {
                black: images.Boutons.GB_BUTTON_BLACK,
                blue: images.Boutons.GB_BUTTON_BLUE,
                clearBlack: images.Boutons.GB_BUTTON_CLEAR_BLACK,
                clearBlue: images.Boutons.GB_BUTTON_CLEAR_BLUE,
                clearGlass: images.Boutons.GB_BUTTON_CLEAR_GLASS,
                clearGreen: images.Boutons.GB_BUTTON_CLEAR_GREEN,
                clearOrange: images.Boutons.GB_BUTTON_CLEAR_ORANGE,
                dmg: images.Boutons.GB_BUTTON_DMG,
                grey: images.Boutons.GB_BUTTON_GREY,
                orange: images.Boutons.GB_BUTTON_ORANGE,
                red: images.Boutons.GB_BUTTON_RED,
                rose: images.Boutons.GB_BUTTON_ROSE,
                white: images.Boutons.GB_BUTTON_WHITE,
            },
            Coque: {
                black: images.Coque.GB_SHELL_BLACK,
                blue: images.Coque.GB_SHELL_BLUE,
                clearBlack: images.Coque.GB_SHELL_CLEAR_BLACK,
                clearBlue: images.Coque.GB_SHELL_CLEAR_BLUE,
                clearOcean: images.Coque.GB_SHELL_CLEAR_OCEAN,
                clearGlass: images.Coque.GB_SHELL_CLEAR_GLASS,
                clearOrange: images.Coque.GB_SHELL_CLEAR_ORANGE,
                clearRed: images.Coque.GB_SHELL_CLEAR_RED,
                dmg: images.Coque.GB_SHELL_DMG,
                ghost: images.Coque.GB_SHELL_GHOST,
                green: images.Coque.GB_SHELL_GREEN,
                red: images.Coque.GB_SHELL_RED,
                white: images.Coque.GB_SHELL_WHITE,
                yellow: images.Coque.GB_SHELL_YELLOW,
            },
            Ips: {
                black: images.Ips.GB_IPS_BLACK,
                dmg: images.Ips.GB_IPS_DMG,
            },
            Pads: {
                black: images.Pads.GB_PAD_BLACK,
                blue: images.Pads.GB_PAD_BLUE,
                clear: images.Pads.GB_PAD_CLEAR,
                green: images.Pads.GB_PAD_GREEN,
                red: images.Pads.GB_PAD_RED,
                rose: images.Pads.GB_PAD_ROSE,
                violet: images.Pads.GB_PAD_VIOLET,
                yellow: images.Pads.GB_PAD_YELLOW,
            },
        };

        if (imageMapping[category] && imageMapping[category][color]) {
            setSelectedImages((prevState) => ({
                ...prevState,
                [category]: imageMapping[category][color],
            }));
        }
    };

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!product) {
        return <p>Chargement...</p>;
    }

    const optionsList = [
        { _id: '1', name: 'Boutons', colors: ['black', 'blue', 'red', 'orange', 'clearBlue'] },
        { _id: '2', name: 'Coque', colors: ['black', 'blue', 'clearRed', 'yellow'] },
        { _id: '3', name: 'Ips', colors: ['black', 'dmg'] },
        { _id: '4', name: 'Pads', colors: ['black', 'blue', 'clear', 'green', 'red', 'rose', 'violet', 'yellow'] },
    ];

    return (
        <div className="flex flex-col items-center">
            <div
                className="w-full bg-black text-white p-4 flex items-center justify-center"
                style={{ cursor: `url(${dragCursor}), auto` }}
            >
                <FaTruck className="mr-2" size={24} />
                <p className="text-sm font-light">Livraison offerte dès 139€ avec Mondial Relay</p>
            </div>

            <div className="w-full bg-gray-900 text-white p-10 flex flex-col justify-end">
                <div className="flex flex-col items-start pl-12 pt-20">
                    <p className="text-l" style={{ fontFamily: '"Roboto", Sans-serif', fontWeight: '300' }}>
                        À partir de {product.prix} €
                    </p>
                    <p className="text-5xl font-semibold mt-4 uppercase" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                        {product.name}
                    </p>
                </div>
            </div>

            <div className="bg-white p-4 flex items-center justify-end mr-20 text-gray-400">
                <div className="flex items-center space-x-2 pr-5">
                    <FaBox size={15} />
                    <span className="ml-2 text-sm">Livraison gratuite</span>
                </div>
                <p className=''>|</p>
                <div className="flex items-center space-x-2 pl-5 pr-5">
                    <FaShoppingBag size={15} />
                    <span className="ml-2 text-sm">À partir de 149€</span>
                </div>
            </div>

            <div className="flex p-6 mx-auto bg-gray-100 shadow-md">
                <div className="w-1/2 flex justify-center items-center">
                    <div className="image-display relative w-full h-80 border-2 border-gray-300">
                        {selectedImages.Coque && (
                            <img
                                src={selectedImages.Coque}
                                alt="Coque sélectionnée"
                                className="absolute top-0 left-0 w-full h-full object-contain"
                                style={{ zIndex: 0 }} // Coque en bas
                            />
                        )}
                        {Object.entries(selectedImages).map(([category, image], index) => (
                            image && category !== 'Coque' && (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${category} sélectionné`}
                                    className="absolute top-0 left-0 w-full h-full object-contain"
                                    style={{ zIndex: index + 1 }} // Les autres éléments au-dessus
                                />
                            )
                        ))}
                    </div>
                </div>


                <div className="w-1/2 flex flex-col">
                    <h2 className="text-2xl font-semibold mt-6">Options</h2>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {optionsList.map(option => (
                            <div key={option._id} className="bg-gray-100 p-4 rounded-md flex flex-col">
                                <span>{option.name}</span>
                                <div className="flex space-x-2 mt-2">
                                    {option.colors.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => handleColorClick(option.name, color)}
                                            className={`bg-${color}-500 text-white px-3 py-1 rounded-md`}
                                        >
                                            {color.charAt(0).toUpperCase() + color.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
