import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'

export default function MonthlyTarget() {
  const series = [85.26]
  const options: ApexOptions = {
    colors: ['#465FFF'],
    chart: {
      fontFamily: 'Outfit, sans-serif',
      type: 'radialBar',
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: '80%',
        },
        track: {
          background: '#E4E7EC',
          strokeWidth: '100%',
          margin: 5, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '36px',
            fontWeight: '600',
            offsetY: -40,
            color: '#1D2939',
            formatter: function (val) {
              return val + '%'
            },
          },
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#465FFF'],
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  }
  return (
    <div className='rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]'>
      <div className='shadow-default rounded-2xl bg-white px-5 pt-5 pb-11 sm:px-6 sm:pt-6 dark:bg-gray-900'>
        <div className='flex justify-between'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-white/90'>
              Monthly Target
            </h3>
            <p className='text-theme-sm mt-1 text-gray-500 dark:text-gray-400'>
              Target you’ve set for each month
            </p>
          </div>
        </div>
        <div className='relative'>
          <div className='max-h-[330px]' id='chartDarkStyle'>
            <Chart
              options={options}
              series={series}
              type='radialBar'
              height={330}
            />
          </div>

          <span className='bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500 absolute top-full left-1/2 -translate-x-1/2 -translate-y-[95%] rounded-full px-3 py-1 text-xs font-medium'>
            +10%
          </span>
        </div>
        <p className='mx-auto mt-10 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base'>
          You earn $3287 today, it's higher than last month. Keep up your good
          work!
        </p>
      </div>

      <div className='flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5'>
        <div>
          <p className='text-theme-xs mb-1 text-center text-gray-500 sm:text-sm dark:text-gray-400'>
            Target
          </p>
          <p className='flex items-center justify-center gap-1 text-base font-semibold text-gray-800 sm:text-lg dark:text-white/90'>
            $20K
            <ArrowDownIcon className='text-error-600 h-4 w-4' />
          </p>
        </div>

        <div className='h-7 w-px bg-gray-200 dark:bg-gray-800'></div>

        <div>
          <p className='text-theme-xs mb-1 text-center text-gray-500 sm:text-sm dark:text-gray-400'>
            Revenue
          </p>
          <p className='flex items-center justify-center gap-1 text-base font-semibold text-gray-800 sm:text-lg dark:text-white/90'>
            $20K
            <ArrowUpIcon className='text-success-600 h-4 w-4' />
          </p>
        </div>

        <div className='h-7 w-px bg-gray-200 dark:bg-gray-800'></div>

        <div>
          <p className='text-theme-xs mb-1 text-center text-gray-500 sm:text-sm dark:text-gray-400'>
            Today
          </p>
          <p className='flex items-center justify-center gap-1 text-base font-semibold text-gray-800 sm:text-lg dark:text-white/90'>
            $20K
            <ArrowUpIcon className='text-success-600 h-4 w-4' />
          </p>
        </div>
      </div>
    </div>
  )
}
