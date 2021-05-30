import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { ChangeEvent, memo , useState, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { UserAuth } from "../../hooks/userAuth";

export const Login: VFC = memo(() => {

    const {Login , loading} = UserAuth();

    const [userId , setUserId] = useState('');

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value); 

    const onClickLogin = () => Login(userId);

    return (
        <Flex align="center" justifyContent="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shodow="md">
                <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={5} py={4} px={10}>
                    <Input value={userId} onChange={onChangeUserId} placeholder="ユーザーID" />
                    <PrimaryButton disabled={userId === ''} loading={loading} onClick={onClickLogin} >ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    );
});