import {
  Box,
  Flex,
  Button,
  Text,
  FormControl,
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Link,
  InputRightElement,
  IconButton,
  Checkbox,
  useDisclosure,
  HStack,
  FormHelperText,
} from "@chakra-ui/react";
import useInput from "../../hooks/useInput";
import { BiEnvelope, BiLock } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useState } from "react";
import NextLink from "next/link";
import ForgotPass from "./ForgotPass";
function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    value: emailValue,
    isValid: emailIsValid,
    reset: emailReset,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
  } = useInput((value) => value.includes("@"));
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    reset: passwordReset,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
  } = useInput((value) => value.trim().length >= 6);
  const isValidForm = passwordIsValid && emailIsValid;
  function signInSubmitHandler(e) {
    e.preventDefault();
    if (!isValidForm) {
      return;
    }
    const userData = { password: passwordValue, email: emailValue };
    //dispatch sign in action with userData
    passwordReset();
    emailReset();
  }
  return (
    <Flex
      width="full"
      h={{ md: "44rem", base: "100vh" }}
      justify="space-around"
      bg="#F9F9F9"
    >
      <Flex
        pt="5"
        pl="7.5rem"
        display={{ base: "none", md: "flex", lg: "flex" }}
        direction="column"
        flexBasis="50%"
        justify="space-evenly"
      >
        <Stack>
          <Text fontWeight="semibold" color="primary.main" fontSize="6xl">
            Let&apos;s Work
          </Text>
          <Text fontSize="4xl">Where your ideas become reality</Text>
        </Stack>
        <Image
          src="/images/Creative team-amico.svg"
          alt="teamwork"
          width="456"
          height="456"
        />
      </Flex>
      <Flex
        pt="5"
        justify="space-evenly"
        direction="column"
        bg="secondary.main"
        flexBasis={{ base: "100%", md: "50%" }}
        align="center"
      >
        <Stack align="center">
          <Text fontWeight="semibold" fontSize="6xl">
            Sign In
          </Text>
          <Text fontSize="md">Sign In now to start sharing your ideas</Text>
        </Stack>
        <Box>
          <form onSubmit={signInSubmitHandler}>
            <Stack align="center" justify="center" spacing="8">
              <Stack align="center" justify="center" spacing="4">
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="lg"
                      h="46px"
                      // eslint-disable-next-line react/no-children-prop
                      children={<BiEnvelope size="20" />}
                    />
                    <Input
                      value={emailValue}
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                      placeholder="Email"
                      variant={emailHasError ? "error" : "primary"}
                      w={{ base: "18.7rem", md: "21.8rem" }}
                      size="lg"
                      type="email"
                    />
                  </InputGroup>
                  {emailHasError ? (
                    <FormHelperText color="#cc0000">
                      enter a valid email
                    </FormHelperText>
                  ) : null}
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="lg"
                      h="46px"
                      // eslint-disable-next-line react/no-children-prop
                      children={<BiLock size="20" />}
                    />
                    <Input
                      value={passwordValue}
                      onChange={passwordChangeHandler}
                      onBlur={passwordBlurHandler}
                      placeholder="Password"
                      variant={passwordHasError ? "error" : "primary"}
                      w={{ base: "18.7rem", md: "21.8rem" }}
                      size="lg"
                      boxShadow="sm"
                      type={showPass.password ? "text" : "password"}
                    />
                    <InputRightElement width="4.5rem">
                      <IconButton
                        size="sm"
                        textAlign="center"
                        bg="transparent"
                        _hover="none"
                        _active="none"
                        mt="1"
                        border="none"
                        outline="none"
                        onClick={() => setShowPass(!showPass)}
                        icon={
                          showPass ? (
                            <AiOutlineEye size="20" />
                          ) : (
                            <AiOutlineEyeInvisible size="20" />
                          )
                        }
                      />
                    </InputRightElement>
                  </InputGroup>
                  {passwordHasError ? (
                    <FormHelperText color="#cc0000">
                      password must atleast has 6 characters
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Stack>
              <Checkbox
                variant="rounded"
                size="lg"
                iconSize="23px"
                px="2"
                alignSelf="flex-start"
              >
                <Text fontSize="md">Remember me</Text>
              </Checkbox>
              <Button
                w={{ base: "18.7rem", md: "21.8rem" }}
                size="lg"
                bg="#5E6DFF"
                variant="primary"
                fontWeight="black"
              >
                Sign In
              </Button>
            </Stack>
          </form>
        </Box>
        <Stack align="center" spacing="5">
          <Text>or sign in with</Text>
          <IconButton
            _hover={{ bg: "transparent", transform: "scale(1.1)" }}
            bg="transparent"
            size="lg"
            // eslint-disable-next-line react/no-children-prop
            children={<FcGoogle size="100%" />}
          />
          <Text
            _hover={{ color: "gray.500" }}
            onClick={onOpen}
            cursor="pointer"
            fontWeight="300"
          >
            Forgot password?
          </Text>
          <ForgotPass onClose={onClose} isOpen={isOpen} />
        </Stack>
        <HStack wrap="wrap" align="center" justify="center">
          <Text
            fontSize={{ md: "20", base: "17" }}
            color="#121212"
            fontWeight="semibold"
          >
            Don&apos;t have an account yet?{" "}
          </Text>
          <Text
            fontSize={{ md: "20", base: "17" }}
            color="primary.main"
            fontWeight="semibold"
          >
            <Link as={NextLink} href="/signup" color="primary.main">
              Sign Up here
            </Link>{" "}
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default SignIn;
