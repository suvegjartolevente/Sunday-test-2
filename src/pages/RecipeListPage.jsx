import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/ui/RecipeItemCard.jsx";

export const RecipeListPage = ({ recipes, onItemClick }) => {
  return (
    <>
      <Center flexDir="column" py={8} userSelect="none" cursor="default">
        <Heading mb={8}>Recipes</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {recipes.map((hit, index) => (
            <RecipeItemCard
              key={index}
              recipe={hit.recipe}
              onClick={() => onItemClick(hit.recipe)}
            />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
