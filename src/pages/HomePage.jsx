import React from "react";
import { Button, VStack, HStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <Center height="100vh">
            <VStack spacing={8}>
                <ButtonRow>
                    <Link to="/login">
                        <Button variant="outline" colorScheme="teal" size="lg" width="200px">
                            Student
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="outline" colorScheme="teal" size="lg" width="200px">
                            Proctor
                        </Button>
                    </Link>
                </ButtonRow>
                <ButtonRow>
                    <Link to="/login">
                        <Button variant="outline" colorScheme="teal" size="lg" width="200px">
                            HOD
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="outline" colorScheme="teal" size="lg" width="200px">
                            COE
                        </Button>
                    </Link>
                </ButtonRow>
            </VStack>
        </Center>
    );
}

function ButtonRow({ children }) {
    return (
        <HStack spacing={8}>
            {React.Children.map(children, (child, index) => (
                <React.Fragment key={index}>{child}</React.Fragment>
            ))}
        </HStack>
    );
}
