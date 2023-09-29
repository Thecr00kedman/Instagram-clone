/* eslint-disable react/prop-types */
import { Box, Menu, MenuItem } from "@mui/material"
import { AnnouncementOutlined, AvTimerOutlined, BookmarkBorderOutlined, LightModeOutlined, SettingsOutlined, SupervisedUserCircle, Logout } from '@mui/icons-material';
import styled from "@emotion/styled";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const MenuItemContainer = styled(MenuItem)`
display:flex;
align-items:center;
cursor:pointer;
& > div{
    margin:8px 5px;
}
`

const list = [
    { icon: <SettingsOutlined />, name: "Settings" },
    { icon: <AvTimerOutlined />, name: "Activity" },
    { icon: <BookmarkBorderOutlined />, name: "Saved" },
    { icon: <LightModeOutlined />, name: "Switch appearance" },
    { icon: <AnnouncementOutlined />, name: "Report a problem" },
    { icon: <SupervisedUserCircle />, name: "Switch accounts" },
]

const MoreMenu = ({ open, handleClose }) => {
    const openMenu = Boolean(open)
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login")
    })
    return (
        <Menu
            id="basic-menu"
            anchorEl={open}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button'
            }}
        >

            {
                list.map((item, index) => (
                    <MenuItemContainer key={index}>
                        <Box>{item.icon}</Box>
                        <Box>{item.name}</Box>
                    </MenuItemContainer>
                ))
            }

            <MenuItemContainer
                onClick={() => signOut(firebaseAuth)}
            >
                <Box><Logout /></Box>
                <Box>Log Out</Box>
            </MenuItemContainer>
        </Menu >
    )
}

export default MoreMenu
