/* eslint-disable react/prop-types */
import { Menu, Search, ExploreOutlined, VideoLibraryOutlined, MapsUgcOutlined, FavoriteBorderOutlined, AddBoxOutlined, HomeOutlined } from "@mui/icons-material"
import Logo from '../assets/logoinsta.png'
import MoreMenu from "./MoreMenu";
import { Avatar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';

const drawerWidth = 180;

const links = [
    { icon: <HomeOutlined fontSize="large" />, name: "Home" },
    { icon: <Search fontSize="large" />, name: "Search" },
    { icon: <ExploreOutlined fontSize="large" />, name: "Explore" },
    { icon: <VideoLibraryOutlined fontSize="large" />, name: "Reels" },
    { icon: <MapsUgcOutlined fontSize="large" />, name: "Messages" },
    { icon: <FavoriteBorderOutlined fontSize="large" />, name: "Notification" },
    { icon: <AddBoxOutlined fontSize="large" />, name: "Create" },
    { icon: <Avatar />, name: "Profile" }
]

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [open, setOpen] = useState(null)

    const handleOpen = (e) => {
        setOpen(e.currentTarget)
    }
    const handleClose = () => {
        setOpen(null)
    }

    const drawer = (
        <div
        >
            <Toolbar />
            <img src={Logo} alt="instagram logo" width={120}
                style={{ marginLeft: "1rem" }} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                }}
            >
                <List>
                    {
                        links.map((item) => (
                            <ListItem
                                key={item.name}
                                disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                </List>
                <Box
                    onClick={handleOpen}
                    sx={{ ml: "1rem", cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <Menu fontSize="large" />
                    <span style={{ marginLeft: "1rem", fontSize: "1.2rem" }}>More</span>
                </Box>
                <MoreMenu
                    open={open}
                    handleClose={handleClose}
                />
            </Box>
        </div>
    );


    return (
        <Box sx={{ display: 'flex', alignItems: "center" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: "#FFF",
                    boxShadow: "none",
                    padding:"8px 1rem",
                }}
            >
                <Toolbar
                    sx={{
                        alignItems: "center"
                    }}
                >
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box
                        sx={{
                            mt: "10px",
                            ml: "1rem",
                            display: { lg: "none", md: "none", sm: "none", xs: "block" }
                        }}
                    >
                        <img src={Logo} alt="instagram logo" width={120} />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}


export default Navbar;
