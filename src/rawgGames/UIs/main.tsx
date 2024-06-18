import {
  Box,
  HStack,
  SimpleGrid,
  VStack,
  Select,
  Heading,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  IconButton,
  Show,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Cards from "./UIsTS/cards";
import useEntity from "./BKUI/useEntities";
import { Games } from "./BKUI/entitys";
import { useState } from "react";
import { GameQuery } from "../../App";
import Platform from "./UIsTS/platform";
import SortSelector from "./UIsTS/sortSelector";
import Drawers from "./UIsTS/drawer";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import Nav from "./nav";

interface Props {
  gamesQuery: GameQuery;
  onPlatforms: (platforms: number) => void;
  onSorts: (sort: string) => void;
  onNav: (genre: string, name?: string) => void;
}

const Main = ({ onNav, gamesQuery, onPlatforms, onSorts }: Props) => {
  const { errors, result, Loaded } = useEntity<Games>("/games", gamesQuery);
  const [platformName, setPlatformName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      {errors && <p>{errors}</p>}

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Nav
            onGenre={(genre, name) => {
              onNav(genre, name);
            }}
          ></Nav>
        </DrawerContent>
      </Drawer>
      <Box>
        <HStack paddingRight="6px" justify="space-between">
          <Heading>
            {!gamesQuery.name && !platformName
              ? "Games"
              : `${platformName} ${gamesQuery.name || "Action"} Games`}
          </Heading>
          <Show below="md">
            <IconButton
              ref={btnRef}
              boxSize="30px"
              as={Button}
              bg=""
              aria-label="menu"
              icon={<MdMenu />}
              onClick={onOpen}
            ></IconButton>
          </Show>
        </HStack>
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
