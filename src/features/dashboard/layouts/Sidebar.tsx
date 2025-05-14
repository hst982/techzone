import { Link, NavLink } from 'react-router-dom';
import {
  ChevronDownIcon,
  RectangleStackIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

import { useSidebar } from '@/features/dashboard/context/SidebarContext';
import logo from '@/assets/logo.svg';

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
  subItems?: {
    name: string;
    path: string;
    icon?: React.ReactNode;
  }[];
};

const sideBarItems: NavItem[] = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: <Squares2X2Icon className='h-6 w-6' />,
  },
  {
    name: 'Products',
    path: '/admin/products',
    icon: <RectangleStackIcon className='h-6 w-6' />,
    subItems: [
      {
        name: 'Collections',
        path: '/admin/products/collections',
      },
      {
        name: 'Gift Cards',
        path: '/admin/products/gift_cards',
      },
      {
        name: 'Category',
        path: '/admin/products/category',
      },
    ],
  },
];

export default function Sidebar() {
  // const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();

  const { openSubmenu, toggleSubmenu } = useSidebar();

  return (
    <aside className='sidebar group h-screen w-[290px] -translate-x-full border-r border-gray-200 bg-white px-5 text-[#333] transition-all duration-300 ease-in-out lg:translate-x-0 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300'>
      <div className='sidebar-header py-8'>
        <Link
          to='/admin/dashboard'
          className='font-logo flex text-4xl font-bold tracking-wider'
        >
          <img
            src={logo}
            alt='TechZone'
            className='group-[.active]:block lg:hidden'
          />
          <span className='logo_text'>TechZone</span>
        </Link>
      </div>
      <div className='no-scrollbar flex h-full flex-col overflow-y-auto duration-300 ease-linear'>
        <div className='sidebar-content'>
          <p className='font-montserrat mb-4 text-xl font-[500] text-gray-400'>
            Menu
          </p>
          <ul className='menu text-sm'>
            {sideBarItems.map((item, index) => (
              <li className='mb-2 font-semibold' key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center rounded-lg px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                      isActive ? 'menu-item-active' : ''
                    }`
                  }
                  onClick={() => {
                    if (item.subItems) toggleSubmenu(item.path);
                  }}
                >
                  <div className={`icon menu-item-icon-active`}>
                    {item.icon}
                  </div>
                  <span className='ml-4'>{item.name}</span>
                  {item.subItems && (
                    <div
                      className={`icon select_icon ml-auto transition-all duration-300 ease-in-out ${
                        openSubmenu === item.path ? 'rotate-x-180' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (item.subItems) toggleSubmenu(item.path);
                      }}
                    >
                      <ChevronDownIcon className='h-5 w-5 text-current' />
                    </div>
                  )}
                </NavLink>
                {item.subItems && (
                  <AnimatePresence initial={false}>
                    {openSubmenu === item.path && (
                      <motion.div
                        key='submenu'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className='ml-6 overflow-hidden'
                      >
                        <ul className='mt-2 pl-2 font-semibold'>
                          {item.subItems.map((sub, index) => (
                            <li key={index}>
                              <NavLink
                                to={sub.path}
                                className={({ isActive }) =>
                                  `mb-1 flex items-center rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                                    isActive ? 'submenu-item-active' : ''
                                  }`
                                }
                              >
                                <span className='ml-2'>{sub.name}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
