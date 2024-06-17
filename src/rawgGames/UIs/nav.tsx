import {
  Box,
  Text,
  Image,
  HStack,
  Spinner,
  Button,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { Genre } from "./BKUI/entitys";
import useEntity from "./BKUI/useEntities";
import OptimisedImage from "./BKUI/optimedImage";
import { useState } from "react";
import useGenre from "./BKUI/useGenres";

interface Props {
  onGenre: (genre: string, name?: string) => void;
}

const Nav = ({ onGenre }: Props) => {
  const { result, errors, Loaded } = useGenre();
  const [click, setClick] = useState("");
  const { colorMode } = useColorMode();

  return (
    <>
      {errors && <p>{errors}</p>}
      {!Loaded && <Spinner />}
      <Heading fontSize="35px" fontWeight="600">
        Genres
      </Heading>
      {result.map((res) => (
        <HStack
          key={res.id}
          bg={colorMode === "dark" ? "blue.900" : "blue.100"}
          borderRadius="5px"
          margin="5px"
          onClick={() => {
            onGenre(res.slug, res.name), setClick(res.slug);
          }}
        >
          <Box overflow="hidden" borderRadius="5px">
            <Image
              overflow="hidden"
              boxSize="30px"
              objectFit="cover"
              src={OptimisedImage(res.image_background)}
            />
          </Box>
          <Button
            fontWeight={click === res.slug ? "bold" : "normal"}
            key={res.id}
            variant="link"
            whiteSpace="normal"
            textAlign="left"
          >
            {res.name}
          </Button>
        </HStack>
      ))}
    </>
  );
};

export default Nav;
