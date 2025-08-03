import { Box, Text, Grid } from "@chakra-ui/react";

export const LabelListing = ({
  listLabels,
  title,
  bgColor,
  fontWeight = "bold",
  alignItems = "center",
  textAlign = "center",
  justifyContent = "center",
}) => {
  return (
    <Box
      mb={4}
      display="flex"
      flexDirection="column"
      alignItems={alignItems}
      width="100%"
    >
      <Text fontSize="lg" mb={2} color="black" fontWeight={fontWeight}>
        {title}
      </Text>
      <Grid
        
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
        gap={2}
        justifyContent={justifyContent}
        alignItems="center"
        width="100%"
        m={2}
      >
        {listLabels.map((label, index) => (
          <Box
            key={index}
            bg={bgColor}
            p={1}
            mb={1}
            borderRadius="md"
            width="8em"
            textAlign={textAlign}
            display="flex"
            justifyContent="center"
          >
            <Text
              fontSize="sm"
              color="white"
              textAlign={textAlign}
              display="flex"
              justifyContent="center"
            >
              {label}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
