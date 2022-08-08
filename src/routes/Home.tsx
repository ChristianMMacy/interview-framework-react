import { Box, Grid, GridItem, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'


export default function Home() {

    const updates: string[] = [
        'Created a home page',
        'Added hover animation to post items on list page.',
        'Added a post detail page with a carousel.',
        'Added header with animation on scroll and breadcrumb for navigation.',
        'Moved request for Posts to context to avoid duplicate requests between list, header, and detail page.',
        'Displayed comments on Post detail page.',
        'Added search bar to header to filter posts based on title and body.',
        'Added an admin page with a post table.',
        'Added basic user detail page.'
    ]

    return (
        <>
            <Grid templateColumns='repeat(12, 1fr)'>
                <GridItem colStart={{ base: 2, lg: 2 }} colEnd={{ base: 12, lg: 6 }} sx={{ pt: { base: 5, lg: 20 } }}>
                    <Text sx={{ mb: 10 }} align='center' fontSize={{ base: '3xl', lg: '5xl' }} className='font-bold'>Nathan Roe - Example Website</Text>
                    <Text align='center' fontSize={{ base: 'lg', lg: '2xl' }} className='font-bold'>
                        This is an example website demonstrating my understanding of React development and my ability to pick up
                        new concepts quickly.
                    </Text>
                    {
                        <List sx={{ display: { base: 'block', lg: 'none' } }}>
                            {
                                updates?.map(update => (
                                    <ListItem>
                                        <Box sx={{ display: 'flex', ml: { base: 25, lg: 100 }, my: 5 }}>
                                            <ListIcon as={SettingsIcon} color='brand.main' sx={{ mt: 2 }} />
                                            <Text fontSize={{ base: 'md', lg: 'xl' }} className='font-bold'>{update}</Text>
                                        </Box>
                                    </ListItem>
                                ))
                            }
                        </List>
                    }
                    <Text sx={{ mt: 10 }} align='center' fontSize={{ base: 'lg', lg: '2xl' }} className='font-bold'>
                        If you have any questions please feel free to email me at nathanroe.dev@gmail.com or give me a call at (208) 954-3979.
                    </Text>
                    <Text sx={{ mt: 10 }} align='center' fontSize={{ base: 'lg', lg: '2xl' }} className='font-bold'>Thank you!</Text>
                </GridItem>
                <GridItem colStart={6} colEnd={12} sx={{ pt: 20, display: { base: 'none', lg: 'block' } }}>
                    <List>
                        {
                            updates?.map(update => (
                                <ListItem>
                                    <Box sx={{ display: 'flex', ml: 100, my: 5 }}>
                                        <ListIcon as={SettingsIcon} color='brand.main' sx={{ mt: 2 }} />
                                        <Text fontSize='xl' className='font-bold'>{update}</Text>
                                    </Box>
                                </ListItem>
                            ))
                        }
                    </List>
                </GridItem>
            </Grid>
        </>
    )
}