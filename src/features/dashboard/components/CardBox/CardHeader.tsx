export default function CardHeader({
  title,
  children,
  className = '',
}: {
  title: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`mb-4 flex flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <div>
        <h3 className='text-base font-medium text-gray-800 dark:text-white/90'>
          {title}
        </h3>
      </div>
      {children && children}
    </div>
  )
}
