import {
  Box,
  HStack,
  SimpleGrid,
  VStack,
  Select,
  Heading,
  Button,
} from "@chakra-ui/react";
import Cards from "./UIsTS/cards";
import useEntity from "./BKUI/useEntities";
import { Games } from "./BKUI/entitys";
import { useState } from "react";
import { GameQuery } from "../../App";
import Platform from "./UIsTS/platform";
import SortSelector from "./UIsTS/sortSelector";

interface Props {
  gamesQuery: GameQuery;
  onPlatforms: (platforms: number) => void;
  onSorts: (sort: string) => void;
}

const Main = ({ gamesQuery, onPlatforms, onSorts }: Props) => {
  const { errors, result, Loaded } = useEntity<Games>("/games", gamesQuery);
  const [platformName, setPlatformName] = useState("");

  return (
    <>
      {errors && <p>{errors}</p>}
      <Box>
        <Heading>
          {!gamesQuery.name && !platformName
            ? "Games"
            : `${platformName} ${gamesQuery.name || "Action"} Games`}
        </Heading>
        <HStack marginY="6px" spacing="10px">
          <Platform
            onplatform={(platforms, name) => {
              onPlatforms(platforms), setPlatformName(name || "");
            }}
          ></Platform>
          <SortSelector onSort={(sorts) => onSorts(sorts)}></SortSelector>
        </HStack>
        <SimpleGrid
          width="100%"
          height="100%"
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing="2rem"
          padding="8px"
          overflow={"scroll"}
        >
          {result.map((game) => (
            <Cards key={game.id} loaded={Loaded} games={game}></Cards>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Main;
