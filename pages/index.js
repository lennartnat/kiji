import Head from 'components/Head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ArticleItem from '../components/ArticleItem';

const useStyles = makeStyles(theme => ({
  grid: {
    flexGrow: 1,
    marginTop: 30
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  },
  title: {
    marginTop: 30
  }
}));

const Home = ({ articles }) => {
  const classes = useStyles();

  return (
    <>
      <Head />

      <Container>
        <Typography variant='h2' className={classes.title}>
          Articles
        </Typography>

        <Link href={'/article/Create'}>
          <Fab color='primary' aria-label='add' className={classes.fab}>
            +
          </Fab>
        </Link>

        <Grid container className={classes.grid} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {articles.map(article => (
                <Grid key={article._id} item>
                  <ArticleItem article={article} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('https://kiji-api.herokuapp.com/articles');
  const articles = await res.json();
  return { articles };
};

export default Home;
