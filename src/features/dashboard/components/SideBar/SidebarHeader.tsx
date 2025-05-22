import { useSidebar } from '@/features/dashboard/context/SidebarContext'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.svg'

export default function SidebarHeader() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()
  return (
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
  )
}
