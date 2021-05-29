import { Button } from "@chakra-ui/button";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { memo , VFC } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickManagement: () => void;
    onClickSetting: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { isOpen, onClose, onClickHome,onClickManagement,onClickSetting } = props;
    return (
        <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody padding={0} bg="gray.100">
                        <Button w="100%" onClick={onClickHome}>TOP</Button>
                        <Button w="100%" onClick={onClickManagement}>ユーザー一覧</Button>
                        <Button w="100%" onClick={onClickSetting}>設定</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});