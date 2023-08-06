import {
  red,
  blue,
  brown,
  green,
  indigo,
  pink,
  purple,
  yellow,
  orange,
  grey,
  deepPurple,
} from "@mui/material/colors";


type productColorsProperties = {
    [key: string]: string
}
const productColors: productColorsProperties = {
  red: red[500],
  orange: orange[500],
  yellow: yellow[500],
  green: green[500],
  blue: blue[500],
  pink: pink[500],
  purple: purple[500],
  indigo: indigo[500],
  violet: deepPurple[500],
  brown: brown[500],
  grey: grey[500],
  black: "#000000",
  white: "#FFFFFF",
}

export { productColors }
