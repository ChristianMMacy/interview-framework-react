import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Input,
    LinkBox,
    LinkOverlay,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Spacer,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Thead,
    Tr,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import {AddIcon, EditIcon} from "@chakra-ui/icons";
import {useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {Field, FieldProps, Form, Formik,} from 'formik';

const initialTeams = [
    {
        id: 1,
        name: 'Team 1',
        owner: 'Owner 1',
        captain: 'Captain 1',
        wins: 1,
        losses: 1,
        draws: 1,
    },
    {
        id: 2,
        name: 'Team 2',
        owner: 'Owner 2',
        captain: 'Captain 2',
        wins: 2,
        losses: 2,
        draws: 2,
    },
    {
        id: 3,
        name: 'Team 3',
        owner: 'Owner 3',
        captain: 'Captain 3',
        wins: 3,
        losses: 3,
        draws: 3,
    },
    {
        id: 4,
        name: 'Team 4',
        owner: 'Owner 4',
        captain: 'Captain 4',
        wins: 4,
        losses: 4,
        draws: 4,
    }
]

/**
 * Displays a list of teams.
 * @constructor
 */
const Teams = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [teams, setTeams] = useState(initialTeams);
    const nextId = useMemo(() => teams.length, [teams]);

    return (
        <>
            <HStack>
                <Heading as='h1'>Teams</Heading>
                <Spacer/>
                <Button colorScheme='blue' onClick={onOpen}><AddIcon sx={{mr: 2}}/>Add Team</Button>
            </HStack>
            <TableContainer>
                <Table>
                    <TableCaption>Teams</TableCaption>
                    <Thead>
                        <Tr>
                            <Td>Edit</Td>
                            <Td>Name</Td>
                            <Td>Owner</Td>
                            <Td>Captain</Td>
                            <Td>Wins</Td>
                            <Td>Losses</Td>
                            <Td>Draws</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {teams.map(({id, name, owner, captain, wins, losses, draws}) => (
                            <LinkBox as='tr' key={id}>
                                <Td>
                                    <LinkOverlay as={Link} to={`${id}`}>
                                        <EditIcon/>
                                    </LinkOverlay>
                                </Td>
                                <Td>{name}</Td>
                                <Td>{owner}</Td>
                                <Td>{captain}</Td>
                                <Td>{wins}</Td>
                                <Td>{losses}</Td>
                                <Td>{draws}</Td>
                            </LinkBox>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Formik
                initialValues={{
                    id: nextId,
                    name: '',
                    owner: '',
                    captain: '',
                    losses: 0,
                    wins: 0,
                    draws: 0
                }}
                onSubmit={(values, actions) => {
                    const {id, name, owner, captain, losses, wins, draws} = values;
                    console.log({values, actions});
                    setTeams([
                        ...teams,
                        {
                            id,
                            name,
                            owner,
                            captain,
                            losses,
                            wins,
                            draws
                        }
                    ])
                    actions.resetForm();
                    onClose();
                }}
            >
                {({resetForm}) => (
                    <Modal isOpen={isOpen} onClose={() => {
                        resetForm();
                        onClose();
                    }}>
                        <ModalOverlay/>
                        <Form>
                            <ModalContent>
                                <ModalHeader>Add Team</ModalHeader>
                                <ModalCloseButton/>
                                <ModalBody>
                                    <VStack spacing={4}>
                                        <FormControl>
                                            <FormLabel htmlFor='name'>Team Name</FormLabel>
                                            <Field as={Input} id='name' name='name' type='text'/>
                                            <FormHelperText>The name of the team.</FormHelperText>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor='owner'>Team Owner</FormLabel>
                                            <Field as={Input} id='owner' name='owner' type='text'/>
                                            <FormHelperText>The name of the team owner.</FormHelperText>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor='captain'>Team Captain</FormLabel>
                                            <Field as={Input} id='captain' name='captain' type='text'/>
                                            <FormHelperText>The name of the team captain.</FormHelperText>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor='wins'>Win Record</FormLabel>
                                            <Field id='wins' name='wins'>
                                                {({field: {name}, form: {setFieldValue}}: FieldProps) => (
                                                    <NumberInput onChange={(value) => setFieldValue(name, +value)}>
                                                        <NumberInputField/>
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper/>
                                                            <NumberDecrementStepper/>
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                )}
                                            </Field>
                                            <FormHelperText>The team's total wins.</FormHelperText>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor='losses'>Loss Record</FormLabel>
                                            <Field id='losses' name='losses'>
                                                {({field: {name}, form: {setFieldValue}}: FieldProps) => (
                                                    <NumberInput onChange={(value) => setFieldValue(name, +value)}>
                                                        <NumberInputField/>
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper/>
                                                            <NumberDecrementStepper/>
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                )}
                                            </Field>
                                            <FormHelperText>The team's total losses.</FormHelperText>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor='draws'>Draw Record</FormLabel>
                                            <Field id='draws' name='draws'>
                                                {({field: {name}, form: {setFieldValue}}: FieldProps) => (
                                                    <NumberInput onChange={(value) => setFieldValue(name, +value)}>
                                                        <NumberInputField/>
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper/>
                                                            <NumberDecrementStepper/>
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                )}
                                            </Field>
                                            <FormHelperText>The team's total draws.</FormHelperText>
                                        </FormControl>
                                    </VStack>
                                </ModalBody>

                                <ModalFooter>
                                    <Button type='submit' colorScheme='blue' mr={3}>
                                        Submit
                                    </Button>
                                    <Button variant='ghost' onClick={() => {
                                        resetForm();
                                        onClose();
                                    }}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Form>
                    </Modal>
                )}
            </Formik>
        </>
    )
}

export default Teams
