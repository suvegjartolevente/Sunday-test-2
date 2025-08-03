import {
  Box,
  Text,
  
} from "@chakra-ui/react";

export const IngredientsListing = ({ ingredients }) => {
  return (
    <Box mb={4}>
      <Text fontSize="lg" fontWeight="bold" mb={2} p={5}>
        Ingredients:
      </Text>
      {ingredients.map((ingredient, index) => (
        <Text key={index} fontSize="md">
          {ingredient}
        </Text>
      ))}
    </Box>
  );
};
