import './App.css';
import Inicio from './components/Inicio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#14b1fc',
      },
      text: {
        primary: "#FFFFFF"
      }
    },
    typography: {
      fontFamily: 'Kalam'      
    },
    
  }
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Inicio />
    </ThemeProvider>
  );
}

export default App;
