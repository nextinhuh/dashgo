import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex aling="center">
            <Box mr="4" textAlign="right">
                <Text>Álvaro Neto</Text>
                <Text color="gray.300" fontSize="small">alvaroneto.dev@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Álvaro Neto" />
        </Flex>
    )
}