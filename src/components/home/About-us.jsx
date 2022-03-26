import React from "react";
import { Box, HStack, Text, Stack, Flex, Image } from "@chakra-ui/react";
const About = () => {
  return (
    <Box w="full" h="636px" bg="#FFF7F4">
      <Flex px="220px" py="100px" justifyContent={'space-between'}>
          <Stack>
          <Stack px="2px" py="2px" w="491px" h="157px">
          <HStack display={'flex'}>
            <Text fontStyle={'bold'} fontWeight={'400'} fontSize={'16px'} lineHeight={'24px'} color="#FF5300">About Us</Text>
            <HStack color="#FF5300" width={'15px'} border={'1px'} justifyContent={'flex-end'}></HStack>
          </HStack>
          <Text fontStyle={'normal'} fontWeight={'600'} fontSize={'40px'} lineHeight={'59px'}> Grow Your Business With Our Agency</Text>
        </Stack>
        <Stack px="10px" py="8px" w="544px" h="199px">
          <Text fontStyle={'normal'} fontWeight={'400'} fontSize={'16px'} lineHeight={'24px'} color="#7B7B7B" py={'10px'}>  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus
            mattis eget sem habitant id ultrices augue. Sit rhoncus .
          </Text>
          <Stack py={'20px'} w={'289px'}>
            <Flex gap="4">
              <Image src="./tick.svg" />
              <Text>Innovative website design</Text>
            </Flex>
            <Flex gap="4">
              <Image src="./tick.svg" />
              <Text>UI/UX design with global trends</Text>
            </Flex>
            <Flex gap="4">
              <Image src="./tick.svg" />
              <Text>Web and email hosting service</Text>
            </Flex>
          </Stack>
        </Stack>
          </Stack>
        
        <Flex justifyContent={'flex-end'} >
          <Image src="./stats.svg" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
