import { HelmetProvider, Helmet } from 'react-helmet-async'

const PageMeta: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
  </Helmet>
)

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <HelmetProvider>{children}</HelmetProvider>

export default PageMeta
