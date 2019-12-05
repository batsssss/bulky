import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingTop: '2rem',

    '& .MuiInputBase-root': {
      borderRadius: 0,
    },

    '& .MuiPaper-root': {
      borderRadius: 0,
    },

    '& button': {
      textTransform: 'none',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },

  table: {
    '& th, td': {
      border: 0,
    },

    '& thead > tr > th:first-child': {
      padding: 6,
    },

    '& thead tr': {
      background: 'rgba(196, 196, 196, 0.25)',
    },

    '& .hiddenCell': {
      display: 'none',
    },

    '& .subTableCell': {
      paddingRight: 0,
    },

    '& .dashCell': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}));

export default useStyles;
