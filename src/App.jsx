import React, { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import { DishSearch } from "./components/DishSearch";
import { data } from "./utils/data";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (recipe) => {
    console.log("Recipe clicked:", recipe);
    setSelectedItem(recipe);
  };

  const handleBackToMainPage = () => {
    setSelectedItem(null);
  };

  return (
    <ChakraProvider>
      <Box
        className="App"
        p={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bg="#FFF5E1"
      >
        {selectedItem ? (
          <RecipeItemPage
            recipe={selectedItem}
            clickFn={handleBackToMainPage}
          />
        ) : (
          <DishSearch
            className="DishSearch"
            display="flex"
            alignItems="center"
            justifyContent="center"
            recipes={data.hits}
            onItemClick={handleItemClick}
          />
        )}
      </Box>
    </ChakraProvider>
  );
};
