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

  gridItemDiagram: {
    display: 'flex',
  },
  diagramPaper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  diagramText: {
    margin: 'auto',
  },

  gridItemRadios: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  radioGroup: {
    flexDirection: 'row',
  },
  lastRadio: {
    marginRight: 0,
  },

  table: {
    '& th, td': {
      border: 0,
    },
  },

  gridItemCheckbox: {
    display: 'flex',
  },
  addButton: {
    minWidth: 150,
    width: '100%',
  },
}));

export default useStyles;
