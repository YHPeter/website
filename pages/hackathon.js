import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '../src/Link';

export default function About() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Hackathon
      </Typography>
      <Button variant="contained" color="primary" component={Link} naked href="/">
        Go to the main page
      </Button>
    </>
  );
}
