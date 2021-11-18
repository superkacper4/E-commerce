import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

interface Types {
    children: ReactNode
}

const ThemeProviderComponent = ({ children }: Types) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)

export default ThemeProviderComponent