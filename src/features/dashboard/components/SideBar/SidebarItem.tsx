import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { useSidebar } from '@/features/dashboard/context/SidebarContext'
import SidebarSubItem from '@/features/dashboard/components/SideBar/SidebarSubItem'

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
        {isOpen && <SidebarSubItem subItems={item.subItems} />}
      </AnimatePresence>
    </li>
  )
}
