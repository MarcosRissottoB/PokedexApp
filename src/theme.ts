import { extendTheme, theme } from '@chakra-ui/react'

export default extendTheme({
  colors: {
    primary: theme.colors.blue[400],
    secondary: theme.colors.red[400],
    gray: {
      50: '#f7fafc',
      300: '#CBD5E0'
    }
  }
})
