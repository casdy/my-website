import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
// import Resume from '../../settings/resume.json';
// import {HeartIcon,HeartIconFilled, SponsorButton,} from '../content/SponsorButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'absolute',
    bottom: theme.spacing(6),
    left: theme.spacing(8),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export const FooterText = () => {
 // const classes = useStyles();

  return (
   
      <Typography variant='body1'>
        <TextDecrypt text={' ©️ Built with ❤️ using React'} />
      </Typography>

  );
};
