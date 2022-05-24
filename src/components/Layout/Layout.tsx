import { Box } from '@mui/material'
import { ResponsiveAppBar } from './AppBar'

export const Layout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <ResponsiveAppBar />
      <Box
        sx={{ flexGrow: 1, margin: 'auto', marginTop: { xs: '56px', sm: '64px', md: '68px' }, width: '80%', paddingTop: '50px' }}
      >
        {children}
      </Box>
    </>
  )
}
