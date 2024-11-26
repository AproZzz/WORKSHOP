import back from '../../img_psp/BACK_PSP.jpg'; // Assurez-vous que le chemin est correct


const ProductSection = () => {
    return (
      <div className="container mx-auto my-8 px-4">
        {/* Section principale */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Texte explicatif */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">RECONDITIONNÉ OU NEUF</h2>
            <p className="text-gray-600 mb-4">
              Il est possible de choisir l’état esthétique de certains composants, reconditionnés ou neufs, permettant de proposer différentes gammes de prix.
            </p>
            <p className="text-gray-600">
              Les pièces reconditionnées sont méticuleusement testées une à une afin d’assurer un fonctionnement parfait. Cependant, des signes d’usure peuvent être visibles.
            </p>
            <p className="text-gray-600 mt-2">
              Les composants neufs, quant à eux, n’ont jamais été utilisés.
            </p>
          </div>
  
          {/* Image comparatif */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full">
              <img src={back} alt="Comparatif Reconditionné ou Neuf" className="rounded-lg shadow-md" />
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>
  
        {/* Section d'information supplémentaires */}
        <div className="mt-8 border-t pt-4">
          <h3 className="text-xl font-bold text-blue-600">INCLUS AVEC LA CONSOLE</h3>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li>Ps Vita OLED Préconfiguré (Reconditionné)</li>
            <li>Carte mémoire interne 4Go (Uniquement pour les sauvegardes des jeux en physique)</li>
            <li>Pochette souple micro fibre PSV</li>
            <li>A/C Chargeur</li>
            <li>(Optionnel) Mémoire supplémentaire de 256Go ou 512Go</li>
            <li>(Optionnel) Adaptateur MicroSD pour PSV</li>
            <li>(Optionnel) Une coque de protection solide</li>
            <li>*Console vendue sans jeux</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProductSection;
  