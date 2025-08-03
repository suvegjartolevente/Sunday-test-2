import { Input } from "@chakra-ui/react";


export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant="flushed"
      placeholder="choose dish "
      color="#803D3B"
      _placeholder={{ opacity: 0.2, color: "#803D3B" }}
      size="lg"
      onChange={changeFn}
      {...props}
    />
  );
};
