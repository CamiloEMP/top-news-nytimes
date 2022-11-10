import { Flex, Heading, Link, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
export const Header = () => {
  return (
    <Flex
      align="center"
      as="header"
      bg="blackAlpha.400"
      gap={8}
      justify="space-between"
      px={4}
      py={6}
      rounded="sm"
      w="full"
    >
      <Heading as="h1" size="lg">
        TOP NEWS
      </Heading>
      <Stack align="center" as="ul" listStyleType="none">
        <li>
          <Link as={RouterLink} to="/">
            home
          </Link>
          <Link as={RouterLink} to="/about">
            About
          </Link>
          <Link as={RouterLink} to="/top-news/food">
            About
          </Link>
        </li>
      </Stack>
    </Flex>
  )
}
