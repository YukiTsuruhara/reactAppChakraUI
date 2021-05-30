import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { memo , VFC } from "react";
import { User } from "../../../types/api/User";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose, user } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent p={4}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={user?.username} isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={user?.name} isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>mail</FormLabel>
                                <Input value={user?.email} isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>tel</FormLabel>
                                <Input value={user?.phone} isReadOnly />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
});