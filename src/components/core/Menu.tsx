import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/meetup_logo.png";
import youtubeLogo from "../../assets/icons8-youtube-48.png";
import meetupLogo from "../../assets/icons8-meetup-50.png";
import "../css/Menus.css";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLoginClick = () => {
    handleClose(); // This will close the menu
    navigate("/login"); // This will navigate to the /login route
  };

  const handleLogoutClick = () => {
    handleClose(); // This will close the menu
    navigate("/logout"); // This will navigate to the /logout route
  };

  const handleProfileClick = () => {
    handleClose(); // This will close the menu
    navigate("/profile"); // This will navigate to the /profile route
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ background: "linear-gradient(45deg, #4A2574, #8C3B9B)" }}
    >
      <Toolbar>
        <IconButton
          href="/"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src={logo} alt="Logo" height="50" className="logo" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AWS User Group - Connecticut
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button
          color="inherit"
          href="https://www.meetup.com/aws-community-meetup-connecticut/"
          startIcon={<img src={meetupLogo} alt="Meetup Logo" height="20" />}
        >
          Events
        </Button>
        <Button
          color="inherit"
          href="https://www.youtube.com/channel/UC1aGcIaXJPp1_iYDIFoZtQQ"
          startIcon={<img src={youtubeLogo} alt="YouTube Logo" height="20" />}
        >
          YouTube
        </Button>
        <Button color="inherit">Rules</Button>
        <Button color="inherit">Resources</Button>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ ml: 2 }}
        >
          <Avatar alt="User Avatar" src={user?.picture} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom", // Change vertical position to "bottom"
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          {isAuthenticated && (
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          )}
          {!isAuthenticated && (
            <MenuItem onClick={handleLoginClick}>Login</MenuItem>
          )}
          {isAuthenticated && (
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
