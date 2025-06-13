import Input from '@/features/dashboard/components/form/input/InputField'

type Props = {
  value: string
  onChange: (val: string) => void
}
export default function InputPrice({ value, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/\D/g, '')
    onChange(numeric)
  }

  const formattedValue = value ? Number(value).toLocaleString('vi-VN') : ''

  return (
    <>
      <Input
        type='text'
        name='originPrice'
        placeholder='Enter origin price...'
        value={formattedValue}
        onChange={handleChange}
      />
    </>
  )
}
