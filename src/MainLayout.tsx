import { Box, Container } from '@chakra-ui/react'
import { Header } from '@components/Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <Box bg="gray.900" minH="100vh" w="full">
      <Container centerContent maxW="container.xl" px={2} py={4} textColor="whiteAlpha.900">
        <Header />
        <Outlet />
      </Container>
    </Box>
  )
}
