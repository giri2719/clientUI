import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Link} from 'react-router-dom';
import {useNavigate } from "react-router-dom";
// import Login from '../Login';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));






const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {


    

    const Navigate = useNavigate();


    const handleLogout = () => {
      localStorage.removeItem("token");
      Navigate("/login")
    };

    function home(){
        Navigate("/")
    }

    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id = 'appbar'>
        <Toolbar>
            
          <IconButton id='iconbar' size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography id = 'bartext' variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div class="icons8-stack-overflow"></div>
          </Typography>&nbsp;&nbsp;&nbsp;

          <Typography id = 'bartext' variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
           <span onClick={home}>stack<b>overflow</b></span> 
          </Typography>&nbsp;&nbsp;&nbsp;

          <Link to="/" style={{"textDecoration":"none","color":"black"}}>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;

          <Link to="/about" style={{"textDecoration":"none","color":"black"}}>About</Link>

          <Search id='searchbar'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Link to="/ask" style={{"textDecoration":"none","color":"black"}}>Ask Question</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button style={{"color":"black"}} onClick={handleLogout}>Logout</Button>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}