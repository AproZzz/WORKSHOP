// src/GB/imageColors.js


import colors from './colors'; // Importez votre fichier de couleurs
import images from '../img/GB/FRONT/index';
const imageColors = {
    [images.GB_USBC]: colors.black,


    [GB_BUTTON_BLACK]: colors.black,
    [images.GB_BUTTON_BLUE]: colors.blue,
    [images.GB_BUTTON_CLEAR_BLACK]: colors.transparent, // Par exemple
    [images.GB_BUTTON_CLEAR_BLUE]: colors.transparent, // Par exemple
    [images.GB_BUTTON_CLEAR_GLASS]: colors.transparent,
    [images.GB_BUTTON_CLEAR_GREEN]: colors.green,
    [images.GB_BUTTON_CLEAR_ORANGE]: colors.orange,
    [images.GB_BUTTON_DMG]: colors.dmg,
    [images.GB_BUTTON_GREY]: colors.grey,
    [images.GB_BUTTON_ORANGE]: colors.orange,
    [images.GB_BUTTON_RED]: colors.red,
    [images.GB_BUTTON_ROSE]: colors.rose,
    [images.GB_BUTTON_WHITE]: colors.white,


    [images.GB_SHELL_BLACK]: colors.black,
    [images.GB_SHELL_BLUE]: colors.blue,
    [images.GB_SHELL_CLEAR_BLACK]: colors.transparent,
    [images.GB_SHELL_CLEAR_BLUE]: colors.transparent,
    [images.GB_SHELL_CLEAR_OCEAN]: colors.blue,
    [images.GB_SHELL_CLEAR_GLASS]: colors.transparent,
    [images.GB_SHELL_CLEAR_ORANGE]: colors.orange,
    [images.GB_SHELL_CLEAR_RED]: colors.red,
    [images.GB_SHELL_DMG]: colors.dmg,
    [images.GB_SHELL_GHOST]: colors.transparent, // Assumer une couleur pour "Ghost"
    [images.GB_SHELL_GREEN]: colors.green,
    [images.GB_SHELL_RED]: colors.red,
    [images.GB_SHELL_WHITE]: colors.white,
    [images.GB_SHELL_YELLOW]: colors.yellow,
    [images.GB_IPS_BLACK]: colors.black,
    [images.GB_IPS_DMG]: colors.dmg,


    [images.GB_PAD_BLACK]: colors.black,
    [images.GB_PAD_BLUE]: colors.blue,
    [images.GB_PAD_CLEAR]: colors.transparent,
    [images.GB_PAD_GREEN]: colors.green,
    [images.GB_PAD_RED]: colors.red,
    [images.GB_PAD_ROSE]: colors.rose,
    [images.GB_PAD_VIOLET]: colors.violet,
    [images.GB_PAD_YELLOW]: colors.yellow,
    // Ajoutez les associations d'images et de couleurs supplémentaires ici
};

export default imageColors;
