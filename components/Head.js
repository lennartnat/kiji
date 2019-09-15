import NextHead from 'next/head';

const Head = ({ title }) => {
  const text = title ? `| ${title}` : '';

  return (
    <NextHead>
      <title>{`Kiji ${text}`}</title>
    </NextHead>
  );
};

Head.defaultProps = {
  title: ''
};

export default Head;
