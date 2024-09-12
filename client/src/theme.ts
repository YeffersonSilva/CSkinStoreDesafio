import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light', // O 'dark', según prefieras
  useSystemColorMode: false, // Deshabilita el uso del modo de color del sistema
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#1a1a1a', // Fondo gris oscuro
       // color: 'white',
      },
    },
  },
})

export default theme;
