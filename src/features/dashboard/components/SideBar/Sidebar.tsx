import { Link, useLocation } from 'react-router-dom'
import {
  RectangleStackIcon,
  Squares2X2Icon,
  InboxIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import { useSidebar } from '@/features/dashboard/context/SidebarContext'
import logo from '@/assets/logo.svg'
import SidebarItem from '@/features/dashboard/components/SideBar/SidebarItem'
import { useEffect, useState } from 'react'

type NavItem = {
  name: string
  icon: React.ReactNode
  subItems: {
    name: string
    path: string
  }[]
}

const sideBarItems: NavItem[] = [
  {
    name: 'Dashboard',
    icon: <Squares2X2Icon className='h-6 w-6' />,
    subItems: [{ name: 'eCommerce', path: '/admin/dashboard' }],
  },
  {
    name: 'Products',
    icon: <RectangleStackIcon className='h-6 w-6' />,
    subItems: [
      {
        name: 'Collections',
        path: '/admin/collections',
      },
      {
        name: 'Gift Cards',
        path: '/admin/gift_cards',
      },
      {
        name: 'Category',
        path: '/admin/category',
      },
    ],
  },
  {
    name: 'Orders',
    icon: <InboxIcon className='h-6 w-6' />,
    subItems: [
      {
        name: 'Orders List',
        path: '/admin/orders',
      },
    ],
  },
]

export default function Sidebar() {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar()

  const sidebarWidth =
    isExpanded || isMobileOpen
      ? 'w-[290px]'
      : isHovered
        ? 'w-[290px]'
        : 'w-[90px]'

  const sidebarVisibility = isMobileOpen
    ? 'translate-x-0'
    : '-translate-x-full lg:translate-x-0'

  const location = useLocation()
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  // Tự mở menu đúng với pathname khi load lại trang
  useEffect(() => {
    const matchedIndex = sideBarItems.findIndex((item) =>
      item.subItems?.some((sub) => location.pathname.startsWith(sub.path)),
    )
    setOpenMenuIndex(matchedIndex !== -1 ? matchedIndex : null)
  }, [location.pathname])
  return (
    <aside
      className={`sidebar group fixed top-0 left-0 z-9999 h-screen lg:static ${sidebarWidth} ${sidebarVisibility} -translate-x-full border-r border-gray-200 bg-white px-5 text-[#333] transition-all duration-300 ease-in-out lg:translate-x-0 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='sidebar-header py-8'>
        <Link
          to='/admin/dashboard'
          className='font-logo flex text-4xl font-bold tracking-wider'
        >
          <img
            src={logo}
            alt='TechZone'
            className={`${isExpanded || isHovered || isMobileOpen ? 'hidden' : 'block'}`}
          />
          <span
            className={`logo_text ${isExpanded || isHovered || isMobileOpen ? 'block' : 'hidden'} opacity-0 lg:opacity-100`}
          >
            TechZone
          </span>
        </Link>
      </div>
      <div className='no-scrollbar flex h-full flex-col overflow-y-auto duration-300 ease-linear'>
        <div className='sidebar-content'>
          {isExpanded || isHovered || isMobileOpen ? (
            <p className='font-montserrat mb-4 text-xl leading-[20px] font-[500] text-gray-400'>
              Menu
            </p>
          ) : (
            <EllipsisHorizontalIcon className='mr-auto mb-5 ml-auto h-6 w-6 text-gray-400' />
          )}

          <ul className='menu text-sm'>
            {sideBarItems.map((item, index) => {
              return (
                <SidebarItem
                  key={index}
                  item={item}
                  isOpen={openMenuIndex === index}
                  onOpen={() =>
                    setOpenMenuIndex((prev) => (prev === index ? null : index))
                  }
                />
              )
            })}
          </ul>
        </div>
      </div>
    </aside>
  )
}
