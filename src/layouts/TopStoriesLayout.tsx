import { Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink, Outlet } from 'react-router-dom'

import { topStoriesSection } from '@/constants/topStoriesSections'

export const TopStoriesLayout = () => {
  return (
    <section>
      <Flex gap={4} justifyContent="center">
        {topStoriesSection.map(({ nameSection }) => (
          <Link
            key={nameSection}
            as={RouterLink}
            border="1px"
            p={4}
            rounded="md"
            style={{ textDecoration: 'none' }}
            to={`/top-stories/${nameSection}`}
          >
            {nameSection}
          </Link>
        ))}
      </Flex>
      <Outlet />
    </section>
  )
}
