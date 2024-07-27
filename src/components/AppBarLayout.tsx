import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import Flair from './Flair';

export function AppBarLayout() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div">
                        Albin Paul <Typography variant='caption' component="span">Application Engineer at Amazon</Typography>
                    </Typography>
                    <Box flexGrow={1} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

