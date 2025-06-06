import { useLocation } from 'react-router'
import {
  RectangleStackIcon,
  Squares2X2Icon,
  InboxIcon,
  EllipsisHorizontalIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { useSidebar } from '@/features/dashboard/context/SidebarContext'
import SidebarItem from '@/features/dashboard/components/SideBar/SidebarItem'
import { useEffect, useState } from 'react'
import SidebarHeader from '@/features/dashboard/components/SideBar/SidebarHeader'

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
        name: 'Inventory',
        path: '/admin/inventory',
      },
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
  {
    name: 'Manager Users',
    icon: <UserGroupIcon className='h-6 w-6' />,
    subItems: [
      {
        name: 'Profile',
        path: '/admin/profile',
      },
      {
        name: 'Users',
        path: '/admin/users',
      },
    ],
  },
]

export default function Sidebar() {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar()

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
      className={`sidebar group fixed top-0 left-0 z-9999 h-screen lg:static ${isExpanded || isMobileOpen || isHovered ? 'w-[290px]' : 'w-[90px]'} ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} -translate-x-full border-r border-gray-200 bg-white px-5 text-[#333] transition-all duration-300 ease-in-out lg:translate-x-0 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SidebarHeader />

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
