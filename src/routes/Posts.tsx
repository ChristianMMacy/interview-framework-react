import {Table, Tbody, Td, Thead, Tr} from "@chakra-ui/react";

function Posts() {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Td>Post Name</Td>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Something</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}

export default Posts