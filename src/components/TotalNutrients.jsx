 import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export const TotalNutrients = ({ nutrients }) => {
  const [showAll, setShowAll] = useState(false);

 const nutrientsOrder = [
    "ENERC_KCAL",
    "PROCNT",
    "FAT",
    "CHOCDF",
    "CHOLE",
    "NA"
  ];

  const nutrientLabels = {
    ENERC_KCAL: "Energy",
    PROCNT: "Protein",
    FAT: "Fat",
    CHOCDF: "Carbs",
    CHOLE: "Cholesterol",
    NA: "Sodium"
  };

  const initialNutritions = nutrientsOrder.map((key) => ({
    label: nutrientLabels[key] || nutrients[key].label,
    quantity: nutrients[key]?.quantity?.toFixed(2) || "0.00",
    unit: nutrients[key]?.unit || ""
  }));

  const remainingNutritions = Object.keys(nutrients)
  .filter((key) => !nutrientsOrder.includes(key))
  .map((key) => ({
    label: nutrients[key].label,
    quantity: nutrients[key].quantity.toFixed(2),
    unit: nutrients[key].unit,
  }));

  const allNutritions = [...initialNutritions, ...remainingNutritions];
  
  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Total Nutrients
      </Text>

      {initialNutritions.map((nutrition, index) => (
        <Text key={index}>
          {nutrition.label}: {nutrition.quantity} {nutrition.unit}
        </Text>
      ))}

     
      {!showAll && allNutritions.length > 5 && (
        <Button onClick={handleToggle} mt={2}>
          Show More
        </Button>
      )}

      {showAll &&
        allNutritions.slice(6).map((nutrition, index) => (
          <Text key={index}>
            {nutrition.label}: {nutrition.quantity} {nutrition.unit}
          </Text>
        ))}

    
      {showAll && (
        <Button onClick={handleToggle} mt={2}>
          Show Less
        </Button>
      )}
    </Box>
  );
};
