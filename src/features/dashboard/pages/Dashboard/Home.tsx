import PageMeta from '@/components/common/PageMeta'
import EcommerceMetrics from '@/features/dashboard/components/ecommerce/EcommerceMetrics'
import MonthlySalesChart from '@/features/dashboard/components/ecommerce/MonthlySalesChart'
import MonthlyTarget from '@/features/dashboard/components/ecommerce/MonthlyTarget'
import SaleOverview from '@/features/dashboard/components/ecommerce/SaleOverview'
import PageBreadcrumb from '@/features/dashboard/components/PageBreadCrumb'

export default function Home() {
  return (
    <div>
      <PageMeta title='Admin | Dashboard' description='Dashboard Page' />
      <PageBreadcrumb pageTitle='Dashboard' />
      <div className='grid grid-cols-12 gap-4 md:gap-6'>
        <div className='col-span-12 space-y-6 xl:col-span-7'>
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>
        <div className='col-span-12 xl:col-span-5'>
          <MonthlyTarget />
        </div>

        <div className='col-span-12'>
          <SaleOverview />
        </div>
      </div>
    </div>
  )
}
