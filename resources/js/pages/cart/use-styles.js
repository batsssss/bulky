import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingTop: '2rem',

    '& .MuiInputBase-root': {
      borderRadius: 0,
    },

    '& .MuiPaper-root': {
      borderRadius: 0,
    },

    '& .MuiCheckbox-root, .MuiRadio-root': {
      color: orange[500],
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

    '& thead tr, .subtotalRow': {
      background: 'rgba(196, 196, 196, 0.25)',

      '& td': {
        fontWeight: 500,
      },
    },
  },

  gridItemOrderButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  orderButton: {
    minWidth: 150,
  },
}));

export default useStyles;
