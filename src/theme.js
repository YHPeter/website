import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",

    primary: {
      main: '#226ddc',
    },
    secondary: {
      main: '#ff5865',
    },
    background: {
      default: '#121212',
    },
  },
});

export default theme;
