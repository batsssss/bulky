import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Divider,
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
  },
  title: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0 , 0.8)',
  },
  subtitle: {
    color: 'rgba(0, 0, 0 , 0.8)',
    marginLeft: '.5rem',
  },
  titleDivider: {
    height: 2,
    margin: '.5rem 0',
    background: orange[500],
  },
}));


function PageTitle(props) {
  const classes = useStyles();
  const { title, subtitle } = props;

  return (
    <>
      <Box className={classes.box}>
        <Typography component="h1" align="left" variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography component="h1" align="left" variant="h5" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </Box>
      <Divider className={classes.titleDivider} />
    </>
  );
}

PageTitle.defaultProps = {
  title: undefined,
  subtitle: undefined,
};

PageTitle.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
};

export default PageTitle;
