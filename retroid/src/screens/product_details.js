import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaTruck, FaBox, FaShoppingBag, FaRedo } from 'react-icons/fa';
import dragCursor from '../img/drag.png'; // Importer l'image pour le curseur
import images from '../img/GB/FRONT/index'; // Assurez-vous que le chemin est correct
import colors from './colors';
import Banner from './details-component/Banner';
import CustomAccordion from '../screens/ps-component/CustomAccordion'; // Importer le composant Banner
import ImageSlider from './ps-component/ImageSlider';  // Importer le slider d'images
import ProductDescription from './ps-component/ProductDescription';  // Importer la fiche description
import CustomTabs from './details-component/CustomTabs';  // Importer les tabs

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [options, setOptions] = useState([]);
    const [error, setError] = useState(null);
    const [selectedImages, setSelectedImages] = useState({
        Boutons: images.Boutons.GB_BUTTON_BLACK,
        Pads: images.Pads.GB_PAD_BLACK,
        Coque: images.Coque.GB_SHELL_BLACK,
        Ips: images.Ips.GB_IPS_BLACK,
    });

    const [hoveredColor, setHoveredColor] = useState({ option: '', color: '' });

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
                pink: images.Boutons.GB_BUTTON_PINK,
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
                grey: images.Coque.GB_SHELL_DMG,
                ghost: images.Coque.GB_SHELL_GHOST,
                green: images.Coque.GB_SHELL_GREEN,
                red: images.Coque.GB_SHELL_RED,
                white: images.Coque.GB_SHELL_WHITE,
                yellow: images.Coque.GB_SHELL_YELLOW,
            },
            Ips: {
                black: images.Ips.GB_IPS_BLACK,
                grey: images.Ips.GB_IPS_DMG,
            },
            Pads: {
                black: images.Pads.GB_PAD_BLACK,
                blue: images.Pads.GB_PAD_BLUE,
                clear: images.Pads.GB_PAD_CLEAR,
                green: images.Pads.GB_PAD_GREEN,
                red: images.Pads.GB_PAD_RED,
                pink: images.Pads.GB_PAD_PINK,
                purple: images.Pads.GB_PAD_PURPLE,
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

    const resetImages = () => {
        setSelectedImages({
            Boutons: images.Boutons.GB_BUTTON_BLACK,
            Pads: images.Pads.GB_PAD_BLACK,
            Coque: images.Coque.GB_SHELL_BLACK,
            Ips: images.Ips.GB_IPS_BLACK,
        });
    };

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!product) {
        return <p>Chargement...</p>;
    }

    const optionsList = [
        { _id: '1', name: 'Boutons', colors: ['black', 'blue', 'red', 'orange', 'pink', 'dmg', 'grey', 'white', 'clearBlack', 'clearOrange', 'clearGreen', 'clearGlass', 'clearBlue',] },
        { _id: '2', name: 'Coque', colors: ['black', 'blue', 'red', 'yellow', 'clearBlack', 'clearOrange', 'clearGlass', 'clearBlue', 'clearOcean', 'clearRed', 'ghost', 'green', 'grey'] },
        { _id: '3', name: 'Ips', colors: ['black', 'grey'] },
        { _id: '4', name: 'Pads', colors: ['black', 'blue', 'clear', 'green', 'red', 'pink', 'purple', 'yellow'] },
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
            <div className="flex pt-10 p-6 pb-20 mx-auto bg-gray-100 shadow-md w-full h-full">
                <div className="w-1/2 flex flex-col items-start">
                    <button onClick={resetImages} className="focus:outline-none ml-20">
                        <FaRedo className="text-xl" />
                    </button>
                    <div className="image-display relative w-full h-full">
                        {selectedImages.Coque && (
                            <img
                                src={selectedImages.Coque}
                                alt="Coque sélectionnée"
                                className="absolute top-0 left-0 w-full h-full object-contain"
                                style={{ zIndex: 0 }}
                            />
                        )}
                        {Object.entries(selectedImages).map(([category, image], index) => (
                            image && category !== 'Coque' && (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${category} sélectionné`}
                                    className="absolute top-0 left-0 w-full h-full object-contain"
                                    style={{ zIndex: index + 1 }}
                                />
                            )
                        ))}
                        {/* Afficher le nom de la couleur survolée */}
                        {/* {hoveredColor && (
                            <div className="absolute bottom-0 left-0 w-full text-center text-xl text-gray-700">
                                {hoveredColor}
                            </div>
                        )} */}

                    </div>
                </div>
                {/* 
                <div className="w-10/12 flex flex-col">
                    <ProductDescription />
                </div> */}
                {/* <div className="w-1/2 flex flex-col"> */}
                <div className="w-full p-8 bg-white shadow-lg rounded-lg">
                    <div className="flex items-center space-x-2 bg-gray-100 w-full justify-around">
                        <h2 className="text-2xl font-semibold mt-6 uppercase">Configuration</h2>
                    </div>
                        {optionsList.map(option => (
                            <CustomAccordion
                                // key={option._id} className="bg-white p-4 rounded-md flex flex-col">
                                //     <span>{option.name}</span>
                                //     <div className="flex flex-col space-y-2 mt-2">
                                //         <div className="flex space-x-2">
                                key={option._id}
                                title={option.name}
                                content={
                                    <div className="flex flex-col space-y-2 mt-2">
                                        {option.colors.map(colorName => {
                                            const color = colors.find(c => c.name.toLowerCase() === colorName.replace(/ /g, '').toLowerCase());
                                            return color ? (
                                                <div key={color.name} className="relative flex flex-col items-center">
                                                    <button
                                                        onClick={() => handleColorClick(option.name, colorName)}
                                                        onMouseEnter={() => setHoveredColor({ option: option.name, color: color.name })}
                                                        onMouseLeave={() => setHoveredColor({ option: '', color: '' })}
                                                        className="text-white px-3 py-3 rounded-full"
                                                        style={{ backgroundColor: color.value }}
                                                    />
                                                    {hoveredColor.option === option.name && hoveredColor.color === color.name && (
                                                        <div className="absolute bottom-[-30px] bg-gray-700 text-white text-xs rounded py-1 px-2">
                                                            {color.name}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : null
                                        })}
                                    </div>
                                }
                            />
                        ))}
                    </div>
</div>

            {/* Utilisation du composant Banner */}
            {/* <Banner title="PS VITA OLED" subtitle="Découvrez la nouvelle PS VITA OLED à partir de 189€" /> */}

            <div className="p-8">
                {/* Mise en page en flex pour afficher les deux composants côte à côte */}
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                    {/* Composant ImageSlider à gauche */}
                    {/* <ImageSlider /> */}

                    {/* Composant ProductDescription à droite */}
                    <ProductDescription />
                </div>

                {/* Ajouter les Tabs en dessous */}
                <div className="mt-8">
                    <CustomTabs />
                </div>
            </div>
        </div >
    );
};

export default ProductDetails;
