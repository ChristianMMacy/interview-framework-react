import * as React from 'react'
import { Outlet } from 'react-router-dom'
import {Box, Flex} from '@chakra-ui/react'

const Dashboard = () => (
    <>
        <Box width='100' height='20' backgroundColor='blue.200'/>
        <Flex direction="row">
            <Box width='20' height='100vh' backgroundColor='blue.200'/>
            <Box p='10'><Outlet/></Box>
        </Flex>
    </>
)

export default Dashboard
