import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Headers from "./rawgGames/UIs/headers";
import Main from "./rawgGames/UIs/main";
import Nav from "./rawgGames/UIs/nav";

export interface GameQuery {
  genre: string | null;
  name?: string | null;
  platform: number | null;
  sorts: string | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" `,
        md: `"header header" "nav   main"`,
      }}
      gridTemplateRows={"50px"}
      gridTemplateColumns={{ base: "100vw", md: "25vw 1fr" }}
      gap="1"
    >
      <GridItem area="header">
        <Headers
          searchs={(search) => setGameQuery({ ...gameQuery, search })}
        ></Headers>
      </GridItem>
      <Show above="md">
        <GridItem pl={2} area="nav">
          <Nav
            onGenre={(genre, name) => {
              setGameQuery({ ...gameQuery, genre, name });
            }}
          ></Nav>
        </GridItem>
      </Show>
      <GridItem pl="5px" area="main">
        <Main
          onSorts={(sorts) => setGameQuery({ ...gameQuery, sorts })}
          onPlatforms={(platform) => setGameQuery({ ...gameQuery, platform })}
          gamesQuery={gameQuery}
        ></Main>
      </GridItem>
    </Grid>
  );
}

export default App;
