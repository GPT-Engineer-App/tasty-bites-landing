import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaUtensils, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navigation */}
        <Box as="nav" w="full" py={4} px={8} bg="white" boxShadow="sm">
          <Flex justify="space-between" align="center">
            <FaUtensils size="28" color="#FC8E00" />
            <Stack direction="row" spacing={8}>
              <Link href="#menu" fontWeight="bold" color="gray.600">
                Menu
              </Link>
              <Link href="#about" fontWeight="bold" color="gray.600">
                About
              </Link>
              <Link href="#contact" fontWeight="bold" color="gray.600">
                Contact
              </Link>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="white" py={20}>
          <VStack spacing={5}>
            <Heading as="h1" size="2xl" fontWeight="bold" color="gray.800">
              Taste the Best
            </Heading>
            <Text fontSize="lg" color="gray.500">
              Discover your next favorite meal.
            </Text>
            <Button colorScheme="orange" size="lg">
              View Menu
            </Button>
          </VStack>
        </Flex>

        {/* Featured Image */}
        <Box w="full" py={10}>
          <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzE1NDQxNjY1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Restaurant Interior" />
        </Box>

        {/* About Section */}
        <Flex direction="column" align="center" justify="center" bg="gray.50" py={10}>
          <Heading as="h2" size="xl" color="gray.800" mb={5}>
            About Us
          </Heading>
          <Text w="60%" textAlign="center" color="gray.600">
            We've been serving up delicious meals to the community for over 20 years. Come experience our passion for flavor.
          </Text>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="gray.800" color="white" py={5}>
          <Flex justify="space-around" align="center">
            <Stack spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                Follow Us
              </Text>
              <Flex>
                <FaInstagram size="20" style={{ marginRight: 15 }} />
                <FaTwitter size="20" style={{ marginRight: 15 }} />
                <FaFacebook size="20" />
              </Flex>
            </Stack>
            <Stack spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                Quick Links
              </Text>
              <Link href="#menu">Menu</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
