export default function CardBox({
  children,
  classname = '',
}: {
  children: React.ReactNode
  classname?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03] ${classname}`}
    >
      {children}
    </div>
  )
}
