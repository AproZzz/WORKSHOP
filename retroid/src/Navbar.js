import { Link, useLocation } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // État pour gérer l'ouverture du menu déroulant

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    };

    fetchProducts();
  }, []);

  const navigation = [
    { name: "PERSONNALISATION", href: '/', current: location.pathname === '/', isDropdown: true },
    { name: 'PSVITA – OLED', href: '/panier', current: location.pathname === '/panier' },
    { name: 'ÉDITIONS LIMITÉES', href: '/product-list', current: location.pathname === '/product-list' },
    { name: 'ACCESSOIRES', href: '/product-details', current: location.pathname === '/product-details' },
    { name: 'FONDS D’ÉCRAN', href: '/fonds-ecrans', current: location.pathname === '/fonds-ecrans' },
    { name: 'CREATION PRODUITS', href: '/create-product', current: location.pathname === '/create-product' },
  ];

  return (
    <Disclosure as="nav" className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="/logo.webp"
                alt="Metro retroid"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => item.isDropdown && setIsDropdownOpen(true)}
                    onMouseLeave={() => item.isDropdown && setIsDropdownOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.isDropdown && isDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1">
                          {products.map((product) => (
                            <Link
                              key={product._id}
                              to={`/products/${product._id}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
