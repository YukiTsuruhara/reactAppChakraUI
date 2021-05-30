import { Center, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo , useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

import { UseAllUsers } from "../../hooks/useAllUsers";
import { Spinner } from "@chakra-ui/spinner";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UseLoginuser } from "../../hooks/useLoginUser";
import { Login } from "./Login";


export const UserManagement: VFC = memo(() => {

    const { getUsers, loading, users} = UseAllUsers();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {onSelecter, selectedUser} = useSelectUser();
    const { loginUser } = UseLoginuser();

    useEffect(() => getUsers(), []);

    const onClickUser = useCallback((id: number) => {
        onSelecter({ id, users, onOpen });
    },[users, onSelecter,onOpen]);

    return(
        <>
        {loading ? (
            <Center h="100vh">
                <Spinner />
            </Center>
            ) : (
            <Wrap p={{ base:4, md:10 }}>
                {users.map((user) => (
                    <WrapItem key={user.id} mx="auto">
                        <UserCard
                            imageUrl="https://source.unsplash.com/random"
                            userName={user.username}
                            fullName={user.name}
                            onClick={onClickUser}
                            id={user.id}
                        />
                    </WrapItem>
                ))}
            </Wrap> 
            )}
            <UserDetailModal user={selectedUser} isAdmin={loginUser?.isAdmin} isOpen={isOpen} onClose={onClose}/>
        </>
    );
});