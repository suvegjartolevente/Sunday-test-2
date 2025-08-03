import React, { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { Text, Box, Button } from "@chakra-ui/react";
import { RecipeListPage } from "../pages/RecipeListPage";

export const DishSearch = ({ recipes, onItemClick }) => {
  const [searchField, setSearchField] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleChange = (event) => setSearchField(event.target.value);

  const handleFilterClick = (filter) => {
    setSelectedFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const matchedDishes = recipes.filter((hit) => {
    const matchesSearch = hit.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
    const matchesFilter = selectedFilter
      ? hit.recipe.healthLabels.includes(selectedFilter)
      : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <Box
      p={4}
      mb={8}
      alignItems="center"
      display="flex"
      flexDirection="column"
      userSelect="none"
      cursor="default"
    >
      <Box alignItems="center" display="flex" flexDirection="column">
        <Text fontSize="lg" mb={2}>
          Search for dishes:
        </Text>
        <TextInput
          changeFn={handleChange}
          w={250}
          mb={8}
          bg="#F9D689"
          borderRadius="lg"
        />
        <Box mb={4}>
          <Button
            width="8em"
            bg={selectedFilter === "Vegan" ? "#803D3B" : "#F9D689"}
            onClick={() => handleFilterClick("Vegan")}
            colorScheme="green"
            mr={2}
            color={selectedFilter === "Vegan" ? "#F9D689" : "#803D3B"}
            boxShadow={
              selectedFilter === "Vegan" ? "10px 10px 10px #6c81a3" : ""
            }
          >
            Vegan
          </Button>
          <Button
            width="8em"
            bg={selectedFilter === "Vegetarian" ? "#803D3B" : "#F9D689"}
            onClick={() => handleFilterClick("Vegetarian")}
            colorScheme="green"
            color={selectedFilter === "Vegetarian" ? "#F9D689" : "#803D3B"}
            boxShadow={
              selectedFilter === "Vegetarian" ? "10px 10px 10px #6c81a3" : ""
            }
            mr={2}
          >
            Vegetarian
          </Button>
          <Button
            width="8em"
            bg={selectedFilter === "Pescatarian" ? "#803D3B" : "#F9D689"}
            onClick={() => handleFilterClick("Pescatarian")}
            colorScheme="green"
            color={selectedFilter === "Pescatarian" ? "#F9D689" : "#803D3B"}
            boxShadow={
              selectedFilter === "Pescatarian" ? "10px 10px 10px #6c81a3" : ""
            }
            mr={2}
          >
            Pescatarian
          </Button>
        </Box>
        {matchedDishes.length > 0 ? (
          <RecipeListPage recipes={matchedDishes} onItemClick={onItemClick} />
        ) : (
          <Text fontSize="lg" mt={4}>
            No recipes found
          </Text>
        )}
      </Box>
    </Box>
  );
};
