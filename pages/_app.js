import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Kiji extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <CssBaseline />

        <AppBar position='static'>
          <Toolbar>
            <Link href={'/'}>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant='h4'>Kiji</Typography>
              </a>
            </Link>
          </Toolbar>
        </AppBar>

        <Component {...pageProps} />
      </>
    );
  }
}

export default Kiji;
