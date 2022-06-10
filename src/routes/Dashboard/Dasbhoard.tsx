import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Dashboard = () => (
  <Box width='100%' height='50px' bgColor='blue.40' />
  <Box width='50px' height='100%' bgColor='blue.40' />
  <Outlet />
)

export default Dashboard