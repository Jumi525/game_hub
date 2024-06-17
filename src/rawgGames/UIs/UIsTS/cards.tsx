import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Icon,
  Badge,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import useCards from "../BKUI/useCards";
import { Games } from "../BKUI/entitys";
import { useState } from "react";
import CardSkeleton from "./cardSkeleton";

interface Props {
  games: Games;
  loaded: boolean;
}

const Cards = ({ games, loaded }: Props) => {
  const { Images, iconMap, critics } = useCards(games);

  return (
    <Card overflow="hidden">
      <Skeleton isLoaded={loaded}>
        <Image src={Images} />
      </Skeleton>
      <CardBody>
        {loaded && (
          <Stack spacing="0">
            <Heading size="md">{games.name}</Heading>
            <HStack justifyContent="space-between">
              <HStack>
                {games.parent_platforms.map(({ platform }) => (
                  <Icon key={platform.id} as={iconMap[platform.slug]}></Icon>
                ))}
              </HStack>
              <Badge borderRadius="4px" paddingX="5px" colorScheme={critics}>
                {games.metacritic}
              </Badge>
            </HStack>
          </Stack>
        )}
        {!loaded && <CardSkeleton></CardSkeleton>}
      </CardBody>
    </Card>
  );
};

export default Cards;
