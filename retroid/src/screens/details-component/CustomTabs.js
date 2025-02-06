import React, { useState } from 'react';

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    {
      label: 'Description',
      value: 'description',
      content:
        "Chaque console que je propose est moddée à partir de cartes mères officielles restaurées. Les composants tels que l'écran, la coque et les boutons sont neufs, bien que non officiels Nintendo. Cela me permet de garantir des consoles personnalisées de haute qualité, alliant fiabilité et esthétique unique.",
    },
    {
      label: 'Accompte',
      value: 'features',
      content:
        "Un acompte de 30 % sera demandé pour confirmer chaque commande, le solde restant sera à régler une fois la console terminé.",
    },
    {
      label: 'Fournir une console',
      value: 'reviews',
      content:
        "Vous pouvez me fournir une console fonctionnelle sur laquelle je pourrais travailler. Merci de me contacter directement sur Instagram pour organiser l'expédition de votre console.",
    },
    {
      label: 'Délais et expédition',
      value: 'delay',
      content:
        "Les consoles sont préparées sur commande, nécessitant jusqu'à 40 jours avant l'expédition. Nous offrons des options d'expédition rapides et fiables : Colissimo, Mondial Relay ou Chronopost Express.",
    },
    {
      label: 'Garantie',
      value: 'garantee',
      content:
        'Les consoles sont garanties 3 mois. Cependant, nous restons disponible pour toutes réparations ou remplacement si besoin.',
    },
  ];

  return (
    <div className="mt-16 bg-gray-100 w-4/6 m-auto mb-20">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`w-1/2 px-4 py-2 font-medium text-sm text-center focus:outline-none ${
              activeTab === tab.value
                ? 'bg-gray-300 border-b-2 border-blue-500 text-blue-500'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-blue-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        {tabs.map(
          (tab) =>
            activeTab === tab.value && (
              <div key={tab.value}>
                <p className="text-gray-700">{tab.content}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CustomTabs;
