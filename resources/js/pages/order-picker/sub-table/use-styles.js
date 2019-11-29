import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  table: {
    '& th, td': {
      border: 0,
    },

    '& thead tr, .subtotalRow': {
      background: 'rgba(196, 196, 196, 0.25)',

      '& td': {
        fontWeight: 500,
      },
    },
  },
}));

export default useStyles;
