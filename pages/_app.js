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
        <Head>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <style>
            {`img {
              max-width: 100%;
              height: auto;
              width: auto;
            }
            
            a {
              text-decoration: none;
              color: inherit;
            }
            `}
          </style>
        </Head>

        <CssBaseline />

        <AppBar position='static'>
          <Toolbar>
            <Link href={'/'}>
              <a>
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
