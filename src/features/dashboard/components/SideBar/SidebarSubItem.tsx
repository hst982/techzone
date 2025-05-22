import { motion } from 'framer-motion'
import { NavLink } from 'react-router'
import { useSidebar } from '@/features/dashboard/context/SidebarContext'

// Define the SubItem type
type SubItem = {
  name: string
  path: string
}

export default function SidebarSubItem({ subItems }: { subItems: SubItem[] }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()

  return (
    <motion.div
      key='submenu'
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className='ml-6 overflow-hidden'
    >
      <ul
        className={`mt-2 pl-2 font-semibold ${
          isExpanded || isHovered || isMobileOpen ? 'block' : 'hidden'
        }`}
      >
        {subItems.map((sub, index) => (
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
  )
}
