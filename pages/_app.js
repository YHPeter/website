import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../src/Copyright";
import Header from "../src/layouts/Header";

import classes from "../src/styles/index.css"

import { appWithTranslation } from '../i18n'

function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title key="title">Tech4Good - Official Site</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <style>{`html, body { background-color: #121212 }`}</style>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Header title="Tech4Good" />

          <Box my={2} mx={2}>
            <Component {...pageProps} className={classes.fillHeight} />
          </Box>
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default appWithTranslation(MyApp)
