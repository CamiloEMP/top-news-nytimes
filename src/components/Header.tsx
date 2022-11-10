import { Flex, Heading } from '@chakra-ui/react'

import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <Flex alignItems="center" as="header" justifyContent="space-between" p={4} shadow="md" w="full">
      <Heading as="h1" size="lg">
        TOP NEWS
      </Heading>
      <Navbar />
    </Flex>
  )
}
