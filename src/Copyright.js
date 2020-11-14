import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import {Button} from "@material-ui/core";
import { Github } from "mdi-material-ui";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <MuiLink color="inherit" href="/">
        BiggerLab
      </MuiLink>
      {' '}
      {new Date().getFullYear()}
      {' · '}
      <Button variant="outlined" href="https://github.com/Tech4GoodCN/website" target="_blank" size="small" startIcon={<Github />}>
        Source
      </Button>
    </Typography>
  );
}
