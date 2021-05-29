import {ChakraProvider , Button} from "@chakra-ui/react";

const App = () => {
    return(
        <ChakraProvider>
            <div>
                <Button colorScheme="blue">こんにちわ</Button>
            </div>
        </ChakraProvider>
    );
};

export default App;

