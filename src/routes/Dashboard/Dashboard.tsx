import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Dashboard = () => (
    <>
        <Box width='100' height='20' backgroundColor='blue.200'/>
        <Box width='20' height='100vh' backgroundColor='blue.200'/>
        <Outlet/>
    </>
)

export default Dashboard
