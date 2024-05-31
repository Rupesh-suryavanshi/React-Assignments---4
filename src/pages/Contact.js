import React from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Image,
  Link,
  Text,
  VStack
} from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <Box margin="70px">
      <Center mt="100px">
        <Text fontFamily="Poppins" fontWeight="bolder" fontSize="45px">
          Contact Us
        </Text>
      </Center>

      <Text
        fontFamily="Verdana, sans-serif"
        fontWeight="400"
        fontSize="20px"
        color="#6C6768"
        textAlign="center"
        mt="10px"
      >
       Get in Touch with us
      </Text>

      <Center>
        <Image
          alt="Mail Icon"
          src="https://www.masaischool.com/images/contact/mail.svg"
          width="140px"
          mt="20px"
        />
      </Center>

      <Center mt="10px">
        <Text fontFamily="Poppins" fontWeight="700" fontSize="24px">
          Write to us at
        </Text>
      </Center>

      <Center>
        <Link
          fontFamily="Poppins"
          fontSize="24px"
          color="#3470E4"
          href="mailto:info@bookbus.in"
        >
         info@bookbus.in
        </Link>
      </Center>

      <Divider my="20px" />

      <Text
        fontFamily="Verdana, sans-serif"
        fontWeight="400"
        fontSize="16px"
        color="#2f2d2d"
        mt="10px"
      >
        In case of any queries you may have about Bookbus contact us
      </Text>

     
    </Box>
  );
};

export default ContactUs;
