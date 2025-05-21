import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSidebar } from '@/features/dashboard/context/SidebarContext'

type SubItem = {
  name: string
  path: string
}

type NavItem = {
  name: string
  icon: React.ReactNode
  subItems: SubItem[]
}

export default function SidebarItem({
  item,
  isOpen,
  onOpen,
}: {
  item: NavItem
  isOpen: boolean
  onOpen: () => void
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()
  const location = useLocation()

  const isActive = item.subItems.some((sub) =>
    location.pathname.startsWith(sub.path),
  )

  const hasOpened = useRef(false)

  useEffect(() => {
    if (isActive && !hasOpened.current) {
      onOpen()
      hasOpened.current = true
    }
  }, [isActive, onOpen])
  return (
    <li className='mb-2 font-semibold'>
      <div
        onClick={() => onOpen()}
        className={`menu-item flex cursor-pointer items-center rounded-lg px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${
          isActive || isOpen ? 'menu-item-active' : ''
        }`}
      >
        <div className='icon'>{item.icon}</div>
        {isExpanded || isHovered || isMobileOpen ? (
          <span className='ml-4'>{item.name}</span>
        ) : (
          ''
        )}
        {isExpanded || isHovered || isMobileOpen ? (
          <div
            className={`icon select_icon ml-auto transition-all duration-300 ease-in-out ${isOpen ? 'rotate-x-180' : ''}`}
          >
            <ChevronDownIcon className='h-5 w-5 text-current' />
          </div>
        ) : (
          ''
        )}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='submenu'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='ml-6 overflow-hidden'
          >
            <ul
              className={`mt-2 pl-2 font-semibold ${isExpanded || isHovered || isMobileOpen ? 'block' : 'hidden'}`}
            >
              {item.subItems.map((sub, index) => {
                return (
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
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
