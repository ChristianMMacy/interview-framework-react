import { useCallback, useContext, useEffect, useState } from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavigationContext } from 'NavigationContext'
import SearchBar from './SearchBar'

export interface HeaderStyle {
    bg: string,
    color: string,
    active: boolean
}

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const { breadcrumbs, setBreadCrumbs } = useContext(NavigationContext)
    const [headerStyle, setHeaderStyle] = useState<HeaderStyle>()

    const headers = [
        { text: 'Posts', link: '/posts' },
        { text: 'Admin', link: '/admin' }
    ]

    const updateHeaders = (style: Partial<HeaderStyle>) => {
        setHeaderStyle(hs => Object.assign({}, hs, style))
    }

    const handleScroll = useCallback(() => {
        if (window.scrollY > 0) {
            updateHeaders({
                bg: 'rgba(255, 255, 255, .9)',
                color: 'black',
                active: true
            })
        } else {
            updateHeaders({
                bg: 'brand.main',
                color: 'white',
                active: false
            })
        }
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
    }, [handleScroll])

    useEffect(() => {
        // Update breadcrumbs
        switch (location.pathname) {
            case '/':
                setBreadCrumbs([])
                break
            case '/posts':
                setBreadCrumbs([{ link: '/posts', title: 'Posts' }])
                break
        }

        // Update header styling
        window.scrollTo(0, 0)
        handleScroll()
    }, [location, handleScroll, setBreadCrumbs])


    return (
        <>
            <Grid templateColumns='repeat(12, 1fr)' sx={{
                background: headerStyle?.bg || 'transparent',
                transition: 'background .5s',
                position: 'fixed',
                width: '100%',
                backdropFilter: 'blur(3px)',
                boxShadow: '0px 0px 5px grey',
                height: '60px',
                zIndex: 1
            }}>
                <GridItem colSpan={5} sx={{ display: 'flex', alignItems: 'center', pl: 5 }}>
                    <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/', { replace: true })}>
                        <Text sx={{ color: headerStyle?.color, transition: 'color .5s' }} fontSize={{ base: "lg", sm: "xl" }} className="font-bold">
                            Example Website
                        </Text>
                    </Box>
                    <Breadcrumb
                        spacing='8px'
                        sx={{ ml: 5, '& *': { color: headerStyle?.color }, display: { base: 'none', lg: 'flex' } }}
                        separator={<ChevronRightIcon color='gray.500' />}
                    >
                        {
                            breadcrumbs?.map(bc => (
                                <BreadcrumbItem key={bc.title}>
                                    <BreadcrumbLink href={bc.link}>{bc.title}</BreadcrumbLink>
                                </BreadcrumbItem>
                            ))
                        }
                    </Breadcrumb>
                </GridItem>
                <GridItem colStart={{ base: 8, md: 6, xl: 9 }} colEnd={13} sx={{ display: 'flex', alignItems: 'center', pr: { base: 5, md: 20 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        {
                            headers.map(h => (
                                <Box
                                    key={h.link}
                                    sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                    onClick={() => navigate(h.link, { replace: true })}
                                >
                                    <Text
                                        sx={{ color: headerStyle?.color, transition: 'color .5s' }}
                                        fontSize="lg"
                                        className="font-bold"
                                    >
                                        {h.text}
                                    </Text>
                                </Box>
                            ))
                        }
                        <Box sx={{ width: '60%', display: { base: 'none', md: 'block' } }}>
                            <SearchBar color={headerStyle?.color} />
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
            <Box sx={{ pb: '60px' }} />
            <Center sx={{ display: { base: 'block', md: 'none' } }}>
                <Box sx={{ p: 2 }}>
                    <SearchBar color="black" />
                </Box>
            </Center>
        </>
    )
}