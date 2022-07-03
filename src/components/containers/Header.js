/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components
import AppBar from '@material-ui/core/AppBar';
import Drawer from  '@mui/material/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

// Define styling for the header
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'sans-serif', 
    fontSize: '35px', 
    color: 'darkblue'
  },
  appBar:{
    backgroundColor: '#fcb6bb',
    shadows: ['none'],
  },
  links:{
    textDecoration: 'none',
  }
}));

// Header component, displayed on every page
// Links to every other page
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            Campus Management System
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left" 
        varient = "permanent"
        >

        <Toolbar />
        <Divider />

        <List>
          <Typography variant="h6" className={classes.title} color="inherit" >
            Campus Management System
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </List>
      </Drawer>
    </div>
  );    
}

export default Header;
