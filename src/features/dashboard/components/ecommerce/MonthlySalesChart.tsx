import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

export default function MonthlySalesChart() {
  const options: ApexOptions = {
    colors: ['#465fff'],
    chart: {
      fontFamily: 'Inter, sans-serif',
      type: 'bar',
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '39%',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Inter',
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    grid: {
      borderColor: 'rgba(0, 0, 0, 0.09)', // Màu mờ
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
  }
  const series = [
    {
      name: 'Sales',
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
  ]
  return (
    <div className='overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/[0.03]'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold text-gray-800 dark:text-white/90'>
          Monthly Sales
        </h3>
        <div className='relative inline-block'></div>
      </div>

      <div className='custom-scrollbar max-w-full overflow-x-auto'>
        <div className='-ml-5 min-w-[650px] pl-2 xl:min-w-full'>
          <Chart options={options} series={series} type='bar' height={180} />
        </div>
      </div>
    </div>
  )
}
