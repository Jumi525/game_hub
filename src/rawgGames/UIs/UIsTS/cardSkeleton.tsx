import { Skeleton, Stack } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="1rem"></Skeleton>
      <Skeleton height="1rem"></Skeleton>
    </Stack>
  );
};

export default CardSkeleton;
