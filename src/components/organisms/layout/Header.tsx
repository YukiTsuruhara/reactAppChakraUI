import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { memo, useCallback, VFC } from "react";
import { useDisclosure } from "@chakra-ui/react"
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useHistory } from "react-router";


export const Header: VFC = memo(() => {

    const history = useHistory();

    const { isOpen,onOpen,onClose } = useDisclosure();

    const onClickHome = useCallback(() => history.push("/home"),[history]);
    const onClickManagement = useCallback(() => history.push("/home/user_management"),[history]);
    const onClickSetting = useCallback(() => history.push("/home/setting"),[history]);
    
    return(
        <>
        <Flex
            as="nav"
            bg="teal.500"
            color="gray.50"
            align="center"
            justifyContent="space-between"
            padding={{ base:3, md:5 }}
        >
            <Flex
                align="center"
                as="a"
                mr={8}
                _hover={{ cursor: "pointer" }}
                onClick={onClickHome}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: "md" , md: "lg" }}
                >
                    ユーザー管理アプリ
                </Heading>
            </Flex>
            <Flex
                align="center"
                fontSize="sm"
                flexGrow={2}
                display={{ base: "none" , md: "flex" }}
            >
                <Box pr={4}>
                    <Link onClick={onClickManagement}>ユーザー一覧</Link>
                </Box>
                <Link onClick={onClickSetting}>設定</Link>
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer
            isOpen={isOpen}
            onClose={onClose}
            onClickHome={onClickHome}
            onClickManagement={onClickManagement}
            onClickSetting={onClickSetting}
        />
        </>
    );
});