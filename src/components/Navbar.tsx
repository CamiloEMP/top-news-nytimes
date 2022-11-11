import { Stack, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Stack align="center" as="ul" direction="row" gap={4} listStyleType="none">
      <li>
        <Link as={RouterLink} fontSize="lg" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link as={RouterLink} fontSize="lg" to="top-stories/home">
          Top Stories
        </Link>
      </li>
    </Stack>
  )
}
