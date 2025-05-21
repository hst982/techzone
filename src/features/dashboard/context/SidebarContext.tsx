import { createContext, useContext, useState, useEffect } from 'react'

type SidebarContextType = {
  isExpanded: boolean // Sidebar mở rộng hay thu gọn (desktop)
  isMobileOpen: boolean // Sidebar có đang mở trong chế độ mobile
  isHovered: boolean // Sidebar có đang được hover không (dùng cho animation)
  activeItem: string | null // Mục menu hiện tại đang active
  openSubmenu: string | null // Mục con nào đang được mở
  toggleSidebar: () => void // Toggle expand/collapse desktop sidebar
  toggleMobileSidebar: () => void // Toggle mở/đóng sidebar mobile
  setIsHovered: (v: boolean) => void
  setActiveItem: (v: string | null) => void
  toggleSubmenu: (v: string) => void // Toggle mở submenu theo item
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsMobileOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev)
  }

  const toggleSubmenu = (item: string) => {
    setOpenSubmenu((prev) => (prev === item ? null : item))
  }

  return (
    <SidebarContext.Provider
      value={{
        isExpanded: isMobile ? false : isExpanded,
        isMobileOpen,
        isHovered,
        activeItem,
        openSubmenu,
        toggleSidebar,
        toggleMobileSidebar,
        setIsHovered,
        setActiveItem,
        toggleSubmenu,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
