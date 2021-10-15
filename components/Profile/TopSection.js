import {
  Heading,
  Stack,
  HStack,
  Box,
  Text,
  Image,
  VStack,
  Button,
  Tag,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { SiGmail, SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";

function TopSection() {
  const user = {
    username: "Segun Adebayo",
    bio: "Web Developer",
    about: "I love Web development and I have been coding for last ten years",
    interests: ["Web", "Design", "HTML & Javascript"],
    skills_hobbies: ["Web Development", "Hiking"],
    social: { instagram: "", facebook: "", email: "", linkedIn: "" },
  };

  return (
    <Stack>
      <Box bg="secondary.main" px="150px" py="68px">
        <HStack spacing={50} alignContent="center" display={{ md: "flex" }}>
          <Stack>
            <Image
              borderRadius="full"
              width={{ md: 40 }}
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
            />
          </Stack>
          <Stack>
            <Heading fontSize={{ base: "25px", md: "27px" }}>
              {user.username}
            </Heading>
            <Text color="gray.500" fontWeight="light">
              {" "}
              {user.bio}
            </Text>
            <HStack align="center" spacing={0} display={{ md: "flex" }}>
              <IconButton
                as={Link}
                href={user.social.email}
                icon={<SiGmail />}
              />
              <IconButton
                as={Link}
                href={user.social.instagram}
                icon={<SiInstagram />}
              />
              <IconButton
                as={Link}
                href={user.social.facebook}
                icon={<SiFacebook />}
              />
              <IconButton
                as={Link}
                href={user.social.linkedIn}
                icon={<SiLinkedin />}
              />
            </HStack>
            <Text color="gray.500" fontWeight="light">
              {" "}
              {user.about}
            </Text>
            <VStack align="flex-start">
              <Button variant="primary">Message</Button>
            </VStack>
          </Stack>
        </HStack>
      </Box>
      <Box paddingX="150px" paddingY="40px" margin="25px">
        <Heading paddingBottom="20px" fontSize={{ base: "25px", md: "27px" }}>
          Interests
        </Heading>
        <HStack spacing={4} display={{ md: "flex" }}>
          {user.interests.map((interest) => (
            <Tag size="lg" variant="subtle" key={interest}>
              {interest}
            </Tag>
          ))}
        </HStack>
      </Box>
      <Box paddingX="150px" paddingBottom="50px" spacing={25}>
        <Heading paddingBottom="20px" fontSize={{ base: "25px", md: "27px" }}>
          About
        </Heading>
        <Text>
          A mote of dust suspended in a sunbeam Sea of Tranquility vanquish the
          impossible shores of the cosmic ocean a billion trillion another
          world. Hearts of the stars a still more glorious dawn awaits with
          pretty stories for which theres little good evidence not a sunrise but
          a galaxyrise across the centuries inconspicuous motes of rock and gas?
          Something incredible is waiting to be known bits of moving fluff the
          only home we ve ever known emerged into consciousness two ghostly
          white figures in coveralls and helmets are soflty dancing emerged into
          consciousness.
        </Text>
      </Box>
      <Box bg="secondary.main" px="150px" py="35px">
        <Heading paddingBottom="20px" fontSize={{ base: "25px", md: "27px" }}>
          Skills & Hobbies
        </Heading>

        {user.skills_hobbies.map((skill) => {
          return <Text key={skill}>{skill}</Text>;
        })}
      </Box>
    </Stack>
  );
}

export default TopSection;