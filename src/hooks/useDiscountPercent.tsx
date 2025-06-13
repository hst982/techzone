import { useMemo } from 'react'

function useDiscountPercent(giaGoc: number, giaSauGiam: number) {
  const percent = useMemo(() => {
    if (giaGoc <= 0 || giaSauGiam < 0 || giaSauGiam > giaGoc) return null
    const result = ((giaGoc - giaSauGiam) / giaGoc) * 100
    return Math.round(result) // làm tròn về số nguyên
  }, [giaGoc, giaSauGiam])

  return percent
}

export default useDiscountPercent
