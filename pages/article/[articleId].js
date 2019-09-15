import Head from 'components/Head';
import fetch from 'isomorphic-unfetch';
import MarkDown from 'react-markdown';
import Router from 'next/router';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: 30
  },
  actionPane: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  actionButton: {
    margin: theme.spacing(0.5)
  }
}));

const Article = ({ _id, title, content, updatedAt }) => {
  const classes = useStyles();

  const handleDete = async () => {
    await fetch(`https://kiji-api.herokuapp.com/articles/${_id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        Router.push('/');
      })
      .catch(err => {
        alert('An error occurred', err);
      });
  };

  const handleEdit = () => {
    Router.push(`/article/Edit/${_id}`);
  };

  return (
    <>
      <Head title={title} />

      <Container maxWidth={'md'}>
        <Typography variant={'h2'} align={'center'} className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography align={'center'} gutterBottom>
          {new Date(updatedAt).toLocaleString()}
        </Typography>

        <Container className={classes.actionPane}>
          <Button
            variant={'outlined'}
            color={'secondary'}
            onClick={handleDete}
            className={classes.actionButton}
          >
            Delete
          </Button>
          <Button
            variant={'outlined'}
            color={'primary'}
            onClick={handleEdit}
            className={classes.actionButton}
          >
            Edit
          </Button>
        </Container>
        <hr />

        <MarkDown>{content}</MarkDown>
      </Container>
    </>
  );
};

Article.getInitialProps = async ({ query }) => {
  const { articleId } = query;
  const res = await fetch(`https://kiji-api.herokuapp.com/articles/${articleId}`);
  const article = await res.json();
  return article;
};

export default Article;
