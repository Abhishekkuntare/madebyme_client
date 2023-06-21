import {
  Badge,
  Button,
  Image,
  Stack,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import './home.css';
import vg from '../../assets/vg.gif';
import { Link } from 'react-router-dom';
import HomeCom1 from './HomeCom1';
import HomeCom2 from './HomeCom2';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="8"
          >
            <HStack mt={120}>
              <Text
                fontSize={['4xl']}
                fontWeight={'extrabold'}
                fontFamily={'Poppins'}
                textAlign={['center', 'left']}
                letterSpacing="1px"
              >
                A course description
                <Badge
                  variant={'none'}
                  fontSize={['4xl']}
                  fontWeight={'extrabold'}
                  fontFamily={'Poppins'}
                  textAlign={['center', 'left']}
                  letterSpacing="1px"
                  children="is a Significant"
                  color={'#81F9C0'}
                  textTransform="lowercase"
                />
                <Text color={'#7173A1'}>
                  learning experiences for a
                  <Badge
                    variant={'none'}
                    children="course."
                    fontSize={['4xl']}
                    fontWeight={'extrabold'}
                    fontFamily={'Poppins'}
                    textAlign={['center', 'left']}
                    letterSpacing="1px"
                    color={'#CD6DC9'}
                    textTransform="lowercase"
                  />
                </Text>
              </Text>
            </HStack>
            <Link to="/courses">
              <Button width={300} colorScheme={'yellow'} size={'lg'}>
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphic"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
            borderRadius={'100%'}
          />
        </Stack>
      </div>

      <HomeCom1 />
      <HomeCom2 />
    </section>
  );
};

export default Home;
