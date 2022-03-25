import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      html: {
        bg: 'red.400',
        color: 'white',

      },

    },
  },
})