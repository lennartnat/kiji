import Link from 'next/link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 370
  },
  pos: {
    marginBottom: 15
  },
  anchor: {
    textDecoration: 'none',
    color: 'inherit'
  }
});

const ArticleItem = ({ article: { _id, title, updatedAt } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link href={`/article/[id]`} as={`/article/${_id}`}>
          <a className={classes.anchor}>
            <CardContent>
              <Typography variant='h5'>{title}</Typography>
              <Typography className={classes.pos} color='textSecondary'>
                {new Date(updatedAt).toLocaleString()}
              </Typography>
            </CardContent>
          </a>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ArticleItem;
