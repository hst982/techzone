import React from 'react'

import PageMeta from '@/components/common/PageMeta'
import Sidebar from '@/features/dashboard/components/SideBar/Sidebar'
import { SidebarProvider } from '@/features/dashboard/context/SidebarContext'
import Backdrop from '@/features/dashboard/components/SideBar/Backdrop'
import Header from '@/features/dashboard/components/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageMeta title='TechZone | Admin' description='AdminPage' />
      <SidebarProvider>
        <div className='main background-[rgb(23, 24, 33)] font-weight-500 flex h-screen overflow-hidden font-sans text-xl text-[#333] dark:bg-gray-900 dark:text-gray-400'>
          <Sidebar />
          <Backdrop />
          <div className='relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto'>
            <Header />
            <div className='mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6'>
              {children}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}
