import logo from "./logo.svg";
import "./App.css";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Button,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  Spacer,
  Link,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Background } from "./components/Background";
import Iframe from "react-iframe";
import { useEffect, useState } from "react";
import {
  Desktop,
  DeviceMobile,
  MagicWand,
  Book,
  Storefront,
  Equalizer,
  PaintBrush,
  Pen,
  Translate,
} from "phosphor-react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

function App() {
  const gameURL = "https://d13hzxyuktsiiu.cloudfront.net";
  const [play, setPlay] = useState("");
  const [playPressed, setPlayPressed] = useState(false);
  const playGame = () => {
    console.log("playing the game");
    setPlayPressed(true);
    setPlay(gameURL);
  };

  return (
    <Box style={{ backgroundColor: "black" }}>
      <Box className="background">
        <Background />
      </Box>
      <Center mt={600}>
        <VStack
          spacing={0}
          style={{ zIndex: "999", margin: "0", transform: "translateY(4em)" }}
          bg="black"
          padding={10}
        >
          {/* <Text align='center' textStyle="h1" color="white">
            Citation
          </Text> */}

          <Image src="../images/citation-logo.png" alt="citation-logo" />
          <Box p={10}>
            <Text
              align="center"
              mb={5}
              color="yellow.100"
              as="h1"
              fontSize={{ base: "24px", md: "40px", lg: "32px" }}
            >
              a tiny game about academic integrity
            </Text>
            <Box w="75%" m="auto">
              <Text
                align="center"
                mb={10}
                color="white"
                fontSize={{ base: "24px", md: "40px", lg: "32px" }}
              >
                Citation is an episodic mobile and desktop web game. You play as
                a fledgling, if not forgetful scholar of magic on a hunt for
                your lost notes. In the process, you’ll absorb some common-sense
                knowledge about what it means to be an ethical scholar.
              </Text>
            </Box>
          </Box>
          <Center w="100%" position="relative">
            <AspectRatio w="100%" ratio={633 / 292} m={5}>
              <Iframe
                url={play}
                width="100%"
                height="100%"
                className="game"
                display="initial"
                allowFullScreen
              />
            </AspectRatio>
            {!playPressed ? (
              <BrowserView
                style={{ width: "15%", height: "100%", position: "absolute" }}
              >
                <AspectRatio
                  w="100%"
                  bottom="20%"
                  ratio={200 / 55}
                  position="absolute"
                  cursor={"pointer"}
                  onClick={playGame}
                >
                  <Image src="../images/play_button.png" alt="play" />
                </AspectRatio>
              </BrowserView>
            ) : null}
            {!playPressed ? (
              <MobileView
                style={{ width: "15%", bottom: "25%", position: "absolute" }}
              >
                <Link href={gameURL} isExternal>
                  <AspectRatio
                    ratio={200 / 55}
                    cursor={"pointer"}
                    onClick={playGame}
                  >
                    <Image src="../images/play_button.png" alt="play" />
                  </AspectRatio>
                </Link>
              </MobileView>
            ) : null}
          </Center>
          <Box w="100%" bg="black" p={2}>
            <Box w="100%" bg="black" p={5}>
              <Box
                color="white"
                fontSize={{ base: "24px", md: "40px", lg: "32px" }}
                mb={10}
                w="95%"
              >
                <Text
                  className="font-face-gm"
                  fontSize={{ base: "34px", md: "50px", lg: "65px" }}
                  p={2}
                >
                  ABOUT
                </Text>
                <Text
                  mt={5}
                  fontSize={{ base: "24px", md: "40px", lg: "32px" }}
                >
                  Welcome to the world of <i>Dream School</i>, one of the
                  world's premiere school of magic, where tests are games and
                  games are tests. You play as a fledgling scholar on the eve of
                  a <i>SUPER IMPORTANT</i> test.
                </Text>
                <Text mt={5}>
                  Unfortunately, you can't seem to find your notes. Without
                  them, you'll surely fail...
                </Text>
                <Text mt={5} color="yellow">
                  <b>ATTENTION!</b> The first episode requires that you've read
                  the Bean King v. Dream School Case. You can do so in-game, or
                  on our website.
                </Text>
                <Link
                  href="https://www.hallpass.games/2021/10/18/bean-king-v-dream-school-case-description/"
                  isExternal
                >
                  <Button
                    leftIcon={<Book />}
                    size={["sm", "md", "lg", "xl"]}
                    mt={5}
                    fontSize="20px"
                    variant="outline"
                    px={10}
                    py={5}
                    color="yellow"
                  >
                    Read the case study
                  </Button>
                </Link>
              </Box>
              <Box mb={10} p={20}>
                <AspectRatio m={2} ratio={16 / 9} p={10}>
                  <Iframe
                    url="https://www.youtube.com/embed/cjIv7ut14Wk"
                    className="myClassname"
                    display="initial"
                  />
                </AspectRatio>
              </Box>
            </Box>
            <Box w="100%" bg="black" p={5}>
              <Box
                color="white"
                fontSize={{ base: "24px", md: "40px", lg: "32px" }}
                w="95%"
              >
                <Text
                  className="font-face-gm"
                  fontSize={{ base: "34px", md: "50px", lg: "65px" }}
                  p={2}
                >
                  CREDITS
                </Text>
                <Text
                  mt={5}
                  fontSize={{ base: "24px", md: "40px", lg: "32px" }}
                >
                  <i>Citation</i> was made over a summer by a small group of
                  <Link
                    style={{ cursor: "url(../images/arrow_cursor.png),auto" }}
                    color="violet"
                    href="https://ima.shanghai.nyu.edu/node/5"
                    isExternal
                  >
                    {" "}
                    NYU Emerging Media students{" "}
                  </Link>{" "}
                  who wanted to to work together on a game that pushed the
                  limits of what a game on the web could be.
                </Text>
                <List mt={5} spacing={3}>
                  <ListItem>
                    <ListIcon as={PaintBrush} color="white" />
                    Art: Andrew Liu, Hatim Behnsain, Soojin Lee
                  </ListItem>
                  <ListItem>
                    <ListIcon as={Book} color="white" />
                    Story, Programming: Christian Grewell, Zane Fadul
                  </ListItem>
                  <ListItem>
                    <ListIcon as={Pen} color="white" />
                    Design: Soojin Lee
                  </ListItem>
                  <ListItem>
                    <ListIcon as={Equalizer} color="white" />
                    Music: Zane Fadul
                  </ListItem>
                  <ListItem>
                    <ListIcon as={Storefront} color="white" />
                    Marketing: Amy Kang
                  </ListItem>
                </List>
              </Box>
              <Flex my={10} flexDirection="column">
                <Flex flexDirection="row" w="100%">
                  <Box w="50%">
                    <AspectRatio m={5} ratio={16 / 9}>
                      <Image
                        src="../images/character_select.png"
                        alt="character selection screen"
                      />
                    </AspectRatio>
                  </Box>
                  <Box w="50%">
                    <AspectRatio m={5} ratio={16 / 9}>
                      <Image src="../images/dorm.png" alt="dorm" />
                    </AspectRatio>
                  </Box>
                </Flex>
                <Flex flexDirection="row" w="100%">
                  <Box w="50%">
                    <AspectRatio m={5} ratio={16 / 9}>
                      <Image src="../images/shade.png" alt="dorm" />
                    </AspectRatio>
                  </Box>
                  <Box w="50%">
                    <AspectRatio m={5} ratio={16 / 9}>
                      <Image src="../images/ratio.png" alt="dorm" />
                    </AspectRatio>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Text align="center" textStyle="h3" color="white" mt={10}>
              Developed by{" "}
              <Link
                style={{ cursor: "url(../images/arrow_cursor.png),auto" }}
                color="yellow"
                href="https://www.hallpass.games/"
                isExternal
              >
                {" "}
                Hallpass Games{" "}
              </Link>
            </Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
}

export default App;
