import { Box, Text, Image, Flex, Button, Grid } from "@chakra-ui/react";
import { IngredientsListing } from "../components/Ingredients";
import { LabelListing } from "../components/ui/LabelTypes";
import { TotalNutrients } from "../components/TotalNutrients";

export const RecipeItemPage = ({ recipe, clickFn }) => {
  const {
    mealType,
    totalTime,
    ingredientLines,
    healthLabels,
    dietLabels,
    cautions,
    totalNutrients,
  } = recipe;

  const formatMealType = (mealTypeArray) => {
    return mealTypeArray.map((type) => type.toUpperCase()).join(", ");
  };

  return (
    <Box
      userSelect="text"
      cursor="default"
      w="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#FFF5E1"
      p={4}
    >
      <Box
        bg="#F9D689"
        w={["90%", "80%", "70%"]}
        maxW="1200px"
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
      >
        <Flex direction="column" align="center">
          <Button
            mt={3}
            onClick={clickFn}
            variant="ghost"
            bg="#973131"
            padding={5}
            color="white"
            _hover={{ bg: "teal.800" }}
          >
            Back to Main Page
          </Button>
          <Box p={6} userSelect="none" textAlign="center"></Box>
          <Text
            userSelect="text"
            fontSize="4xl"
            fontWeight="bold"
            mb={4}
            p={5}
            textAlign="center"
            fontStyle="italic"
          >
            {recipe.label}
          </Text>
          <Box flex="1" minH="400px" mb={4} p={0} userSelect="none">
            <Image
              userSelect="none"
              src={recipe.image}
              alt={recipe.label}
              objectFit="cover"
              borderRadius="lg"
              w="50vw"
              h="45vh"
              m={0}
              p={0}
            />
          </Box>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            textAlign="center"
          >
            <Box userSelect="contain">
              <Text fontSize="md" mb={4}>
                {formatMealType(mealType)}
              </Text>

              <Text fontSize="md" mb={4}>
                Total cooking time:{" "}
                <Text as="span" fontWeight="bold">
                  {totalTime} minutes
                </Text>
              </Text>
              <Box fontSize="md" mb={4} p={5}>
                Service:{" "}
                <Text as="span" fontWeight="bold">
                  {recipe.yield}
                </Text>
                <IngredientsListing ingredients={ingredientLines} />
              </Box>
            </Box>
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={2}
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Box>
                {healthLabels && healthLabels.length > 0 && (
                  <LabelListing
                    listLabels={healthLabels}
                    title="Health labels:"
                    bgColor="#A1DD70"
                    textAlign="center"
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  />
                )}
                {dietLabels && dietLabels.length > 0 && (
                  <LabelListing
                    listLabels={dietLabels}
                    title="Diet:"
                    bgColor="#EE4E4E"
                  />
                )}
                {cautions && cautions.length > 0 && (
                  <LabelListing
                    listLabels={cautions}
                    title="Cautions:"
                    bgColor="#799351"
                  />
                )}
                <TotalNutrients alignItems="left" nutrients={totalNutrients} />
              </Box>
            </Grid>
          </Grid>

          <Button
            mb={3}
            mt={8}
            onClick={clickFn}
            variant="ghost"
            bg="#973131"
            padding={5}
            color="white"
            _hover={{ bg: "teal.800" }}
          >
            Back to Main Page
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
