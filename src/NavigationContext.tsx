import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'


export interface BreadCrumb {
    link: string
    title: string
}

interface NavigationContextType {
    breadcrumbs: BreadCrumb[] | undefined
    setBreadCrumbs: Dispatch<SetStateAction<BreadCrumb[] | undefined>>

}

interface Props {
    children?: ReactNode
}

// This is what is imported into components using the context
export const NavigationContext = React.createContext<NavigationContextType>({
    breadcrumbs: [],
    setBreadCrumbs: () => { }
})

export default function NavigationContextComponent({ children }: Props) {

    const [breadcrumbs, setBreadCrumbs] = useState<BreadCrumb[]>()

    return (
        <NavigationContext.Provider value={{ breadcrumbs, setBreadCrumbs }}>
            {children}
        </NavigationContext.Provider>
    )
}
