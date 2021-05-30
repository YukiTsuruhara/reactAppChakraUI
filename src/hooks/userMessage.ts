import { useToast } from "@chakra-ui/toast"
import { useCallback } from "react"

type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
};

export const UserMessage = () => {
    const toast = useToast();
    const ShowMessage = useCallback((props:Props) => {
        const { title, status } = props;
        toast({
            title,
            status,
            position: "top",
            duration: 2000,
            isClosable: true
        })
    },[toast]);
    return { ShowMessage };
};