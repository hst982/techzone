import PageMeta from '@/components/common/PageMeta'
import ComponentCard from '@/features/dashboard/components/common/ComponentCard'
import InputPrice from '@/features/dashboard/components/form/form-element/InputPrice'
import Input from '@/features/dashboard/components/form/input/InputField'
import TextArea from '@/features/dashboard/components/form/input/TextArea'
import Select from '@/features/dashboard/components/form/Select'
import PageBreadcrumb from '@/features/dashboard/components/PageBreadCrumb'
import { useDebounce } from '@/hooks'
import { useEffect, useState } from 'react'

export default function AddProduct() {
  const [productID, setProductID] = useState('')
  const [productName, setProductName] = useState<string>('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const debouncedProductName = useDebounce(productName, 800)
  const [sku, setSku] = useState('')
  const [capacityValue, setCapacityValue] = useState('')

  const optionsBrand = [
    { value: 'apple', label: 'APPLE' },
    { value: 'samsung', label: 'SAMSUNG' },
    { value: 'xiaomi', label: 'XIAOMI' },
    { value: 'realme', label: 'REALME' },
    { value: 'oppo', label: 'OPPO' },
    { value: 'pixel', label: 'GOOGLE PIXEL' },
    { value: 'nothing', label: 'NOTHING PHONE' },
  ]
  const optionsCapaCity = [
    { value: '64', label: '64GB' },
    { value: '128', label: '128GB' },
    { value: '256', label: '256GB' },
    { value: '512', label: '512GB' },
    { value: '1TB', label: '1TB' },
  ]
  const handleSelectChangeCapacity = (value: string) => {
    setCapacityValue(value)
  }
  const handleSelectChangeBrand = (value: string) => {
    console.log('Bran:', value)
  }

  const generateProductID = (name: string) => {
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // bỏ ký tự đặc biệt
      .replace(/\s+/g, '-') // chuyển khoảng trắng thành gạch ngang
    const timestamp = Date.now()
    return `${slug}-${timestamp}`
  }
  const generateSKU = (productName: string, capacity: string) => {
    const words = productName.trim().split(/\s+/)

    const prefix = words[0].slice(0, 3).toUpperCase()

    const model = words.find((w) => /\d/.test(w)) || ''
    const modelCode = model.toUpperCase()

    // Lấy từ cuối nếu là phiên bản đặc biệt
    const versionKeywords = ['Pro', 'Max', 'Ultra', 'Lite', 'Plus', 'Pro Max']
    const version = words
      .slice(1)
      .find((w) =>
        versionKeywords.some((keyword) =>
          w.toLowerCase().includes(keyword.toLowerCase()),
        ),
      )

    const versionCode = version ? version.toUpperCase().replace(/\s+/g, '') : ''

    return versionCode
      ? `${prefix}${modelCode}-${versionCode}-${capacity}`
      : `${prefix}${modelCode}-${capacity}`
  }

  useEffect(() => {
    if (debouncedProductName) {
      const id = generateProductID(debouncedProductName)
      setProductID(id)
    }

    if (debouncedProductName) {
      const skuID = generateSKU(debouncedProductName, capacityValue)
      setSku(skuID)
    }
  }, [debouncedProductName, capacityValue])

  const [originPrice, setOriginPrice] = useState('')
  const [salePrice, setSalePrice] = useState('')

  return (
    <div>
      <PageMeta title='ADMIN | Add Product' description='add new product' />
      <PageBreadcrumb pageTitle='Add Product' />
      <div className='grid grid-cols-12 gap-4 md:gap-6'>
        <div className='col-span-12 space-y-6 xl:col-span-9'>
          <ComponentCard title='Add New Form'>
            <form action=''>
              <div className='-mx-2.5 flex flex-wrap gap-y-5'>
                <div className='w-full px-2.5 md:w-1/2'>
                  <div>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Product ID
                    </label>
                    <Input type='text' name='name' value={productID} disabled />
                  </div>
                </div>
                <div className='w-full px-2.5 md:w-1/2'>
                  <div>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Product Name
                    </label>
                    <Input
                      type='text'
                      name='name'
                      onChange={(e) => setProductName(e.target.value)}
                      value={productName}
                    />
                  </div>
                </div>
                <div className='w-full px-2.5 md:w-1/3'>
                  <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Stock Keeping Unit (SKU)
                  </label>
                  <Input type='text' name='sku' value={sku} disabled />
                </div>
                <div className='w-full px-2.5 md:w-1/3'>
                  <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Brand
                  </label>
                  <Select
                    options={optionsBrand}
                    placeholder='Select Brand'
                    onChange={handleSelectChangeBrand}
                    className='dark:bg-dark-900'
                  />
                </div>
                <div className='w-full px-2.5 md:w-1/3'>
                  <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Version
                  </label>
                  <Select
                    options={optionsCapaCity}
                    placeholder='Select Version'
                    onChange={handleSelectChangeCapacity}
                    className='dark:bg-dark-900'
                  />
                </div>
                <div className='w-full px-2.5 md:w-1/2'>
                  <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Origin Price
                  </label>
                  <InputPrice value={originPrice} onChange={setOriginPrice} />
                </div>
                <div className='w-full px-2.5 md:w-1/2'>
                  <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Sale Price
                  </label>
                  <InputPrice value={salePrice} onChange={setSalePrice} />
                </div>
                <div className='w-full'>
                  <div>
                    <label className='mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400'>
                      Description
                    </label>
                    <TextArea
                      rows={5}
                      placeholder='Enter Description...'
                      value={descriptionValue}
                      onChange={(value) => setDescriptionValue(value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </ComponentCard>
        </div>
        <div className='col-span-12 space-y-6 xl:col-span-3'>
          <ComponentCard title='Category'>Category</ComponentCard>
        </div>
      </div>
    </div>
  )
}
