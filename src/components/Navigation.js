import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import logoImage from '../assets/img/bigLogo.png';

const pageNames = ['What is Sustainability to Us?', 'Ranking System']
const pageAddresses = ['about', 'rankingSystem'];

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#1c7399',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderColor: '#1c7399',
    borderWidth: 3,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem: {
    textAlign: 'right',
    marginTop: '3vh',
    '&:hover': {
      backgroundColor: 'rgba(28, 115, 153, 0.3)',
    },
  },
  listText: {
    fontSize: '20px',
    marginRight: '20px',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '2%',
  },
}));

function Navigation() {
  const classes = useStyles();

  function handleClick(key) {
    window.location.href = `/${pageAddresses[key]}`;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={logoImage} className={classes.logo} />
          <Typography variant="h4" noWrap>
            Learn More About Think Twice
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer} align='right'>
          <List>
            {pageNames.map((text, index) => (
              <ListItem button key={index} className={classes.listItem} onClick={() => handleClick(index)}>
                <ListItemText primary={text} className={classes.listText}/>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main>
        <Toolbar />
      </main>
    </div>
  )
}

export default Navigation;