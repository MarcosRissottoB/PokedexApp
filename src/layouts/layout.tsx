import React from 'react'
import { Container } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <Container alignSelf="center" maxWidth="container.lg">
    {children}
  </Container>
)

export default Layout
