import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

function App() {
  return (
    <Box>
    
      <Box as="section" bgImage="url('https://media.licdn.com/dms/image/D5612AQEBCaG6wXd3kA/article-cover_image-shrink_720_1280/0/1693333804449?e=2147483647&v=beta&t=eA2ANKyb9VHZXXgxRHTAFbcrEwNHDZ9HX0hqFdwYU60')" bgSize="cover" color="white" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h1" size="2xl">Find Your Bus Tickets</Heading>
          <Text mt={4}>Your journey starts here. Find and book bus tickets to your desired destination.</Text>
          <HStack spacing={4} mt={8} justify="center">
            <Button colorScheme="blue">Search Tickets</Button>
            <Button variant="outline" colorScheme="blue">Sign up</Button>
          </HStack>
        </Container>
      </Box>

      
      <Box as="section" py={20} bg="gray.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} textAlign="center">How we help</Heading>
          <Flex wrap="wrap" spacing={8} justify="center">
            <Box p={4} bg="white" borderRadius="md" shadow="md" m={4} flexBasis="300px">
              <Image src="https://c8.alamy.com/comp/2EKG4CM/concept-bus-route-on-the-map-3d-rendering-2EKG4CM.jpg" alt="Find bus routes" />
              <Heading as="h3" size="md" mt={4}>Find bus routes</Heading>
              <Text mt={2}>Discover various bus routes to your destination with ease.</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" shadow="md" m={4} flexBasis="300px">
              <Image src="https://cdn.timify.com/uploads/v2blogarticles/A_How_to_Build_an_Online_Booking_Process-20230426205028-472.webp" alt="Easy booking process" />
              <Heading as="h3" size="md" mt={4}>Easy booking process</Heading>
              <Text mt={2}>Our user-friendly booking system ensures a hassle-free experience.</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" shadow="md" m={4} flexBasis="300px">
              <Image src="https://static.vecteezy.com/system/resources/previews/005/747/712/non_2x/24-hours-customer-service-icon-24-7-support-icon-sign-button-customer-service-icon-vector.jpg" alt="24/7 customer support" />
              <Heading as="h3" size="md" mt={4}>24/7 customer support</Heading>
              <Text mt={2}>Get assistance anytime, anywhere with our dedicated support team.</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" shadow="md" m={4} flexBasis="300px">
              <Image src="https://www.kauaiexclusive.com/wp-content/uploads/2021/09/Flexible-Cancel-Option-300x300-1.png" alt="Flexible cancellation policy" />
              <Heading as="h3" size="md" mt={4}>Flexible cancellation policy</Heading>
              <Text mt={2}>Change of plans? No worries. We offer flexible cancellation options.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>


      <Box as="section" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={8}>Trusted by millions of travelers</Heading>
          <HStack spacing={8} justify="center">
            <Image  boxSize="100px"  borderRadius="md"
      objectFit="cover" src="https://khuranatravel.com/shreekhuranatravels/slider/images/site/bus-ticket-booking-khurana-travels-01.jpg" alt="Traveler 1" />
            <Image  boxSize="100px"  borderRadius="md"
      objectFit="cover" src="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/133105/banner_banner.png" alt="Traveler 2" />
            <Image  boxSize="100px"  borderRadius="md"
      objectFit="cover" src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/40860/banner_banner.jpg" alt="Traveler 3" />
            <Image  boxSize="100px"  borderRadius="md"
      objectFit="cover" src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/298192/bus-1.png" alt="Traveler 4" />
          </HStack>
        </Container>
      </Box>


      <Box as="footer" py={4} bg="gray.800" color="white" textAlign="center">
        <Text>© 2024 Bookbus. All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default App;
