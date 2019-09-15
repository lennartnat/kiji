import Head from 'components/Head';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import MarkDown from 'react-markdown';
import Router from 'next/router';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
  },
  preview: {
    padding: theme.spacing(3, 2)
  }
}));

const Edit = ({ _id, title: initTitle, content: initContent }) => {
  const classes = useStyles();
  const [title, setTitle] = useState(initTitle);
  const [content, setContent] = useState(initContent);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    await fetch(`https://kiji-api.herokuapp.com/articles/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        Router.push(`/article/${data._id}`);
      });
  };

  const handleCancel = () => {
    Router.push(`/article/${_id}`);
  };

  return (
    <>
      <Head title={initTitle} />

      <Container maxWidth={'md'}>
        <Typography variant={'h2'} className={classes.title} gutterBottom>
          {'Update Article'}
        </Typography>

        <hr />

        <TextField
          label='Title'
          fullWidth
          value={title}
          onChange={handleTitleChange}
          margin='normal'
          variant='outlined'
        />

        <br />

        <TextField
          label='Content'
          fullWidth
          multiline
          rows={'18'}
          value={content}
          onChange={handleContentChange}
          margin='normal'
          variant='outlined'
        />

        <hr />

        <Typography variant={'h5'} gutterBottom>
          {'Preview'}
        </Typography>
        <MarkDown className={classes.preview}>{content}</MarkDown>

        <hr />

        <Container className={classes.actionPane}>
          <Button
            variant={'outlined'}
            color={'secondary'}
            onClick={handleCancel}
            className={classes.actionButton}
          >
            Cancel
          </Button>
          <Button
            variant={'outlined'}
            color={'primary'}
            onClick={handleSubmit}
            className={classes.actionButton}
          >
            Go
          </Button>
        </Container>
      </Container>
    </>
  );
};

Edit.getInitialProps = async ({ query }) => {
  const { editId } = query;
  const res = await fetch(`https://kiji-api.herokuapp.com/articles/${editId}`);
  const article = await res.json();
  return article;
};

export default Edit;
