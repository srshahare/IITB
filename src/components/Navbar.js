import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'left'
    },
    options: {
        display: 'flex',
        alignItems: 'center',
        width: '400px',
        justifyContent: 'space-evenly'
    }
  }));

const Navbar = ({
    openCreateDialog,
    openDashDialog,
    logout
}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div>
      <AppBar style={{background: 'white'}} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IITB News
          </Typography>
          <div>
              {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
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
                <MenuItem onClick={handleClose}>Create Post</MenuItem>
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu> */}
              <div className={classes.options}>
                <MenuItem style={{background: '#1C8EF9'}} onClick={openCreateDialog}>Create Post</MenuItem>
                <MenuItem style={{background: '#1C8EF9'}} onClick={openDashDialog}>Dashboard</MenuItem>
                <MenuItem style={{background: '#1C8EF9'}} onClick={logout}>Logout</MenuItem>
              </div>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
