import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function HomeCom1() {
  return (
    <Container maxW={'5xl'} mt={10}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Learning scheduling{' '}
          <Text as={'span'} color={'yellow.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          A course description is a brief summary of the significant learning
          experiences for a course. Course descriptions appear in individual
          Course Outlines and in the Program of Studies (POSs) for individual
          programs.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'yellow.300' }}
          >
            <Link to={'/request'}>Get Started</Link>
          </Button>
          <Button rounded={'full'} px={6}>
            <Link to={'/about'}>Learn more</Link>
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export const Illustration = () => {
  return <img src="" alt="" />;
};
