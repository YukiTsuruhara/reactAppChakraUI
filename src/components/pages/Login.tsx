import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { memo , VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
    return (
        <Flex align="center" justifyContent="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shodow="md">
                <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={5} py={4} px={10}>
                    <Input placeholder="ユーザーID" />
                    <PrimaryButton>ログイン</PrimaryButton>.
                </Stack>
            </Box>
        </Flex>
    );
});