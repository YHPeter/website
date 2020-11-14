import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '../Link';
import Button from "@material-ui/core/Button";
import {LocaleSwitcher} from "./LocaleSwitcher";

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Hackathon', url: '/hackathon' },
  { title: 'Page2', url: '/page2' },
  { title: 'Page3', url: '/page3' },
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    // justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    overflowX: 'auto',
  },
  toolbarLink: {
    marginRight: 2,
    borderRadius: 6,
    textTransform: "none"
  },
  toolbarLogo: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link naked href="/" className={classes.toolbarLogo}>
            {title}
          </Link>
        </Typography>
        <LocaleSwitcher />
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          // <Link
          //   color="inherit"
          //   noWrap
          //   key={section.title}
          //   variant="body2"
          //   href={section.url}
          //   className={classes.toolbarLink}
          // >
          //   {section.title}
          // </Link>
          <Button
            color="inherit"
            key={section.title}
            component={Link}
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header