import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Box, Center, Flex, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'

import { topStoriesSectionQuery } from '@/services/getTopStories'

export const TopStoriesSection = () => {
  const params = useParams()
  const { data: topStories, isLoading } = useQuery(topStoriesSectionQuery(params.section!))

  console.log(topStories)

  return (
    <>
      {isLoading ? (
        <div>cargando...</div>
      ) : (
        <section>
          <Heading
            as="h2"
            bg="blackAlpha.400"
            fontWeight="bold"
            textAlign="center"
            textTransform="capitalize"
          >
            {params.section === 'home' ? 'Last Top Stories' : params.section}
          </Heading>
          <Wrap as="div" justify="center" spacing="8px">
            {topStories?.results.map(story => (
              <WrapItem
                key={story.url}
                borderWidth="1px"
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="space-between"
                p={4}
                rounded="md"
                shadow="md"
                w={['320px', '380px']}
              >
                <Text fontSize="xl" fontWeight="semibold">
                  {story.title}
                </Text>
                <Text>{story.abstract}</Text>
                <Image
                  alt={story.multimedia[0].caption}
                  boxSize={['250px', '280px']}
                  mx="auto"
                  objectFit="cover"
                  rounded="md"
                  src={story.multimedia[0].url}
                />
                <Flex direction="column">
                  <Text fontSize="small">
                    Published date: {new Date(story.published_date).toLocaleDateString()}
                  </Text>
                  <Text fontSize="small">{story.byline}</Text>
                </Flex>
              </WrapItem>
            ))}
          </Wrap>
        </section>
      )}
    </>
  )
}
