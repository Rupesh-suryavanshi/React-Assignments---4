import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

function App() {
  return (
    <Box>
    
      <Box as="section" bgImage="url('https://khuranatravel.com/shreekhuranatravels/slider/images/site/bus-ticket-booking-khurana-travels-01.jpg')" bgSize="cover" color="white" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h1" size="2xl">Welcome to Bookbus</Heading>
          <Text mt={4}>We are a leading Bus Booking company</Text>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box as="section" py={20}>
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={8}>About Us</Heading>
          <Text>
          BusBook Travels Pvt Ltd is a renowned brand in the bus operating industry. Our vision is to give a new face to the bus industry. Since our inception passenger comfort was our top priority. We have frequently added luxury buses to our huge fleet of buses. The only thing we focus on is that the comfort quotient of our passengers should never be compromised. We have always tried our best to push our limits in order to develop our travel experience. Read further to understand what we offer that enhances our reputation in the market.
          </Text>
        </Container>
      </Box>

      {/* Our Products Section */}
      <Box as="section" py={20} bg="gray.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} textAlign="center">Our City's</Heading>
          <Flex wrap="wrap" spacing={8} justify="center">
            {[
              "Mumbai",
              "Delhi",
              "Bangalore ",
              "Kolkata ",
              "Chennai",
              "Ahmedabad",
              "Hyderabad",
              "Pune",
              "Surat",
              "Kanpur",
           
            ].map(product => (
              <Box key={product} p={4} bg="white" borderRadius="md" shadow="md" m={4} flexBasis="200px" textAlign="center">
                <Heading as="h3" size="md" mt={4}>{product}</Heading>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>

      <Box as="section" py={20}>
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={8}>Live Bus Tracking </Heading>
          <Text>
          We have integrated this great technology of live bus tracking in almost all of our buses. This helps the passengers to be informed about the live position of the bus, thus helping them in planning their commute to the bus stand. It also prevents the unwanted stress of missing or waiting for the bus in case of delays.
          </Text>
        </Container>
      </Box>

  
      <Box as="section" py={20} bg="gray.50">
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={8}>Contact Us</Heading>
          <VStack as="form" spacing={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Your Message" />
            <Button colorScheme="green" type="submit">Send</Button>
          </VStack>
          <Text mt={4}>
            <Link href="mailto:info@bookbus.in">Email: info@bookbus.in</Link>
          </Text>
          <Text>
            <Link href="Mo:3228088705">Mo: 32 2 808 87 05</Link>
          </Text>
        </Container>
      </Box>

      {/* Bus Ticket Booking Section */}
      <Box as="section" py={20}>
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={8}>Bus Ticket Booking</Heading>
          <Text mb={4}>
            Book your bus tickets with ease using our convenient online booking system. We offer tickets for various destinations across India.
          </Text>
          <VStack as="form" spacing={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Destination" />
            <Input type="date" placeholder="Travel Date" />
            <Button colorScheme="green" type="submit">Book Ticket</Button>
          </VStack>
          <Text mt={4}>
            For any inquiries, please contact us at <Link href="mailto:bus@bookbus.in">bus@bookbus.in</Link> or call <Link href="tel:3228088705">32 2 808 87 05</Link>.
          </Text>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} bg="gray.800" color="white" textAlign="center">
        <Text>© 2023 bookbus . All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default App;
