import React, { useEffect, useState } from 'react';
import App from 'next/app';
import Link from 'next/link';
import Router from 'next/router';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

class Kiji extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <CssBaseline />

        <ProgressBar />

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

const ProgressBar = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
  }, []);

  return isLoading ? (
    <LinearProgress
      color='secondary'
      style={{ position: 'fixed', zIndex: '2', top: '0', width: '100%' }}
    />
  ) : null;
};

export default Kiji;
