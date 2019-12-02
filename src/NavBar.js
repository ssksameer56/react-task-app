import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar, IconButton, Card } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    title2: {
      marginRight: theme.spacing(2)
    },
  }),
);

function NavBar(props){
  const classes = useStyles();
  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Tasks
        </Typography>
        <Typography variant="h6" className={classes.title2}>
          Done : {props.tasklist.filter((task) => {return task.status === true}).length}
        </Typography>
        <Typography variant="h6" className={classes.title2}>
          Total : {props.tasklist.length}
        </Typography>
      </Toolbar>
      
    </AppBar>
    )
}

export default NavBar