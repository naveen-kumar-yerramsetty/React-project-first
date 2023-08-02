import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'; // Import an appropriate icon from Material-UI Icons



const MyAppBar = () => {
  return (
    <AppBar position="static" sx={{ background: '#333' /* Change background color to dark */ }}>
      <Toolbar variant="dense">
        {/* Add the icon before the text */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div" sx={{ mr: 'auto' }}>
          Mappstars
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Typography variant="h6" color="inherit" component="div">
            Firstname Lastname
          </Typography>
      
        </Box>
      
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;


