import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light', 
  useSystemColorMode: false, 
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#1a1a1a', 
     
      },
    },
  },
})

export default theme;
