import PageMeta from '@/components/common/PageMeta'
import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageMeta title='ZoneTech' description='AdminPage' />
      <div className='main background-[rgb(23, 24, 33)] font-sans text-[#333] dark:bg-gray-900 dark:text-gray-400'>
        {children}
      </div>
    </>
  )
}
