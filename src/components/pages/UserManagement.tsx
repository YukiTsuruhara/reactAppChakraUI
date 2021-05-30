import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo , useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

import { UseAllUsers } from "../../hooks/useAllUsers";
import { Spinner } from "@chakra-ui/spinner";

export const UserManagement: VFC = memo(() => {

    const { getUsers, loading, users} = UseAllUsers();

    useEffect(() => getUsers(), []);

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
                        />
                    </WrapItem>
                ))}
            </Wrap> 
            )}
        </>
    );
});