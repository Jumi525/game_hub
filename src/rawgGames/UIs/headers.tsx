import {
  Button,
  FormControl,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { KeyboardEvent } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

interface Props {
  searchs: (search: string) => void;
}

const Headers = ({ searchs }: Props) => {
  const refs = useRef<HTMLInputElement>(null);
  const { toggleColorMode, colorMode } = useColorMode();
  const onSubmits = (event: KeyboardEvent) => {
    event.preventDefault();
    if (refs.current?.value) {
      searchs(refs.current?.value);
      refs.current.value = "";
    }
  };
  return (
    <HStack height="100%" paddingX="4px">
      <HStack justifyContent="space-evenly">
        <Heading letterSpacing="3px" fontSize="13px">
          RAWG
        </Heading>
        <Show above="md">
          <Button fontSize="13px" paddingX="10px" height="25px">
            Rate top Games
          </Button>
        </Show>
      </HStack>
      <InputGroup height="60%">
        <InputLeftElement height="100%" pointerEvents="none">
          {" "}
          <BsSearch />
        </InputLeftElement>
        <Input
          borderRadius="15px"
          height="100%"
          ref={refs}
          onKeyDown={(event) => {
            (event.key === "Enter" || event.key === "Tab") &&
            refs.current?.value !== ""
              ? onSubmits(event)
              : null;
          }}
        ></Input>
      </InputGroup>
      <HStack justifyContent="space-evenly">
        <Heading whiteSpace="nowrap" fontSize="13px">
          LOG IN
        </Heading>
        <Heading whiteSpace="nowrap" fontSize="13px">
          SIGN UP
        </Heading>
      </HStack>
      <IconButton
        boxSize="30px"
        as={Button}
        bg=""
        borderRadius="20px"
        aria-label="check"
        icon={<FaMoon />}
        onClick={() => toggleColorMode()}
      ></IconButton>
    </HStack>
  );
};

export default Headers;
