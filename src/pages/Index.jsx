import { Box, VStack, Heading, Text, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Jared Ingersoll</Heading>
        <Box as="section" id="about">
          <Heading as="h2" size="xl">About</Heading>
          <Text>Placeholder content for the About section. Jared Ingersoll is a software developer with a passion for building scalable web applications.</Text>
        </Box>
        <Box as="section" id="projects">
          <Heading as="h2" size="xl">Projects</Heading>
          <Text>Placeholder content for the Projects section. Check back soon for updates on my latest work!</Text>
        </Box>
        <Box as="section" id="contact">
          <Heading as="h2" size="xl">Contact</Heading>
          <VStack spacing={3}>
            <Link href="https://github.com/jaredingersoll" isExternal>
              <FaGithub /> GitHub
            </Link>
            <Link href="https://linkedin.com/in/jaredingersoll" isExternal>
              <FaLinkedin /> LinkedIn
            </Link>
            <Link href="mailto:jared@example.com" isExternal>
              <FaEnvelope /> Email
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;