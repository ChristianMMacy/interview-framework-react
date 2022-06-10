import * as React from 'react'
import {Outlet} from 'react-router-dom'
import {Box, Flex} from '@chakra-ui/react'

const Dashboard = () => (
    <Flex height='100vh' direction='column'>
        <Flex grow={1} height='20' backgroundColor='blue.200'/>
        <Flex grow={1} height='100%'>
            <Box width='20' height='100%' backgroundColor='blue.200'/>
            <Box p='10'><Outlet/></Box>
        </Flex>
    </Flex>
)

export default Dashboard
