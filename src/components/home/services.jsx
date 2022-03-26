import React from 'react'
import data from './data'
import { useState } from 'react'
import { Box, HStack, Text, Stack, Grid, GridItem } from '@chakra-ui/react'
const Services = () => {
  const [details, setDetails] = useState(data);


  return (
    <Box px={'50px'} py={'100px'}>
      <Stack alignItems={'center'}>
        <HStack display={'flex'}>
          <HStack border={'1px'} w={'30px'} color={'#FF5300'}></HStack>
          <Text color={'#FF5300'}>Ours Services</Text>
          <HStack border={'1px'} w={'30px'} color={'#FF5300'}></HStack>
        </HStack>
      </Stack>
      <Text
        fontStyle={'normal'}
        fontWeight="semibold 600px"
        fontSize={'30px'}
        lineHeight={'59px'}
        textAlign={'center'}
      >
        What We Do
      </Text>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        px={'190px'}
        py={'80px'}
        mt={'10px'}
      >
        {details &&
          details.map(({ id, image, tittle, sample, description }) => (
            <GridItem
              w="350pz"
              h="300"
              bg="white"
              borderRadius={'5px'}
              shadow="lg"
              px={'10'}
              py={'10'}
              key={id}
            >
              <HStack justifyContent={'space-between'}>
                <Text fontSize={'40px'} fontStyle="bold">
                  {image}
                </Text>
                <Text fontSize={'60px'} fontStyle="bold" color="gray.200">
                  {id}
                </Text>
              </HStack>
              <Stack>
                <Text
                  fontStyle={'bold'}
                  fontWeight={'600'}
                  fontSize={'25px'}
                  mb={'10px'}
                >
                  {tittle}
                </Text>
              </Stack>
              <Stack mb={'10px'}>
                <Text fontWeight={'300'} fontSize={'13px'}>
                  {sample}
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight={'300'} fontSize={'13px'}>
                  {description}
                </Text>
              </Stack>
            </GridItem>
          ))}
      </Grid>
    </Box>
  )
}

export default Services
