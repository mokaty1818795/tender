import React from 'react'
import {
  Box,
  HStack,
  Link,
  Button,
  Flex,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'
function Header() {
  return (
    <Box bg="#FFF7F4" w="full" height="850px">
      <HStack justifyContent={'space-around'} alignItems="center">
        <Box>
          <Text
            lineHeight={'46px'}
            color="#FF5300"
            fontSize={'40px'}
            fontFamily={'sans-serif'}
          >
            EazyTech
          </Text>
        </Box>
        <Flex py={'20'} alignItems="center" gap="30px">
          <Link
            fontStyle={'normal'}
            fontWeight={'500'}
            lineHeight={'30px'}
            fontSize={'20px'}
            color="#FF5300"
          >
            Home
          </Link>
          <Link
            fontStyle={'normal'}
            fontWeight={'500'}
            lineHeight={'30px'}
            fontSize={'20px'}
          >
            About
          </Link>
          <Link
            fontStyle={'normal'}
            fontWeight={'500'}
            lineHeight={'30px'}
            fontSize={'20px'}
          >
            Services
          </Link>
          <Link
            fontStyle={'normal'}
            fontWeight={'500'}
            lineHeight={'30px'}
            fontSize={'20px'}
          >
            Portfolio
          </Link>
          <Link
            fontStyle={'normal'}
            fontWeight={'500'}
            lineHeight={'30px'}
            fontSize={'20px'}
          >
            Blog
          </Link>
          <Link
            fontStyle={'normal'}
            fontWeight={'500'}
            lineHeight={'30px'}
            fontSize={'20px'}
          >
            Contactus
          </Link>
          <Box>
            <Button bg="#FFF7F4" width={'135px'} h={'50px'} border="2px">
              Lets Talk
            </Button>
          </Box>
        </Flex>
      </HStack>
      <Flex display={'flex'}>
        <Box px="250px" py="100">
          <Stack h="auto" w={'602px'}>
            <Text
              fontStyle={'normal'}
              fontWeight={'700'}
              fontSize={'48px'}
              lineHeight={'73px'}
            >
              Choose What Matters To Your Business & Your Customers.
            </Text>
          </Stack>
          <Stack h="auto" w={'602px'} mb="20px">
            <Text
              p="2px"
              fontStyle={'normal'}
              fontWeight={'4000'}
              fontSize={'16px'}
              lineHeight="24px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in digni ssim euismod purus donec mus vulputate habitant iaculis.
              Com odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.
            </Text>
          </Stack>
          <Stack w={'150px'}>
            <Button bg="#FF5300" color="#ffffff" size={'lg'}>
              Get Started
            </Button>
          </Stack>
        </Box>
        <Flex justifyContent={'flex-end'} display={'flex'}>
          <Image src="/pana.svg" alt="hero-image" />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
