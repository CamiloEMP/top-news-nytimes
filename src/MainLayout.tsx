import { Box } from '@chakra-ui/react'
import { Header } from '@components/Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Box as="main" p={4}>
        <Outlet />
      </Box>
    </>
  )
}
