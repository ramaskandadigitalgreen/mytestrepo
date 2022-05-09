import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveAppBar from './ResponsiveAppBar';
import SignIn from './SignIn';

function App() {
  return (
    <div>
    <ResponsiveAppBar />
    <SignIn />
    </div>
  );
}

export default App;
