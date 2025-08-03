import { Box, Image, Text } from "@chakra-ui/react";
import { LabelListing } from "./LabelTypes";

export const RecipeItemCard = ({ recipe, onClick }) => {
  const { dietLabels, cautions, dishType, healthLabels } = recipe;

  const filteredHealthLabels = healthLabels?.filter(
    (label) => label === "Vegan" || label === "Vegetarian" || label === "Pescatarian"
  );

  return (
    <Box
    overflow="hidden"
     boxShadow="20px 20px 20px #6c81a3"
      onClick={onClick}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="#304463"
      w="100%"
      p={4}
      color="white"
      borderRadius="lg"
      maxW="sm"
      
      _hover={{ transform: "scale(1.01)" }}
    >
      <Box
      overflow="hidden"
        bg="#F9D689"
        borderRadius="lg"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" p={2} height="250px" overflow="hidden">
          <Image
            src={recipe.image}
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box textAlign="center" mt={2} mx="auto" >
          <Text as="h2" color="black" p={2}>
            {recipe.mealType}
          </Text>
          <Text as="h1" fontWeight="bold" color="black" p={4}>
            {recipe.label}
          </Text>
          {filteredHealthLabels && filteredHealthLabels.length > 0 && (
            <LabelListing
            
              listLabels={filteredHealthLabels}
              title="Health labels:"
              bgColor="#A1DD70"
              fontWeight="bold"
            />
          )}
          {dietLabels && dietLabels.length > 0 && (
            <LabelListing
              listLabels={dietLabels}
              fontWeight="normal"
              bgColor="#EE4E4E"
            />
          )}
          <Text fontSize="md" mb={4} color="black">
            Dish: {recipe.dishType}
          </Text>
          {cautions && cautions.length > 0 && (
            <LabelListing
              listLabels={cautions}
              fontWeight="normal"
              title="Cautions:"
              color="black"
              bgColor="#799351"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};
