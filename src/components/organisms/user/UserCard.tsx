import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo , VFC } from "react";

type Props = {
    imageUrl: string;
    userName: string;
    fullName: string;
}

export const UserCard: VFC<Props> = memo((props) => {
    const { imageUrl, userName, fullName } = props;
    return (
        <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ opacity:0.8, cursor:"pointer" }}
            >
                <Stack textAlign="center">
                    <Image
                    boxSize="160px"
                    borderRadius="full"
                    src={imageUrl}
                    alt={userName}
                    m="auto"
                    objectFit="cover"
                    />
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text>{fullName}</Text>
                </Stack>
        </Box>
    );
});