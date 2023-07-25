import { Container, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

export const VisitShop = () => {
  return (
    <Container maxW={"7xl"} mt={12}>
      <Grid
        h="900px"
        templateRows={useBreakpointValue({ base:"repeat(1, 1fr)" , md: 'repeat(2, 1fr)'})}
        templateColumns={useBreakpointValue({ base:"repeat(1, 1fr)" , md: 'repeat(4, 1fr)'})}
        gap={4}
      >
        <GridItem colSpan={2} bg="tomato" borderRadius={14}>
          Go to shop
        </GridItem>
        <GridItem colSpan={2} bg="white">
          <Grid
            h="450px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem colSpan={2} bg="tomato"  borderRadius={14}>
              prododuct1
            </GridItem>
            <GridItem colSpan={2} bg="tomato"  borderRadius={14}>
            prododuct2
            </GridItem>
            <GridItem colSpan={2} bg="tomato"  borderRadius={14}>
            prododuct3
            </GridItem>
            <GridItem colSpan={2} bg="tomato"  borderRadius={14}>
            product4
            </GridItem>
          </Grid>{" "}
        </GridItem>
        {/* <GridItem colSpan={2} bg='papayawhip' >
          Main
        </GridItem>
        <GridItem colSpan={4} bg='tomato' >
          Footer
        </GridItem> */}
      </Grid>
    </Container>
  );
};
