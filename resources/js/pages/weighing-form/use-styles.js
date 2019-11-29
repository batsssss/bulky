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
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },

  textfield: {
    '& input': {
      paddingTop: '6px',
    },
  },
  textfieldWhite: {
    '& .MuiInputBase-root': {
      background: '#FFF',
    },
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',

    '&.MuiGrid-root.MuiGrid-item': {
      paddingBottom: 0,
    },
  },
  gridItemMinPadding: {
    '&.MuiGrid-root.MuiGrid-item': {
      paddingTop: 0,
      paddingBottom: '1.5rem',
    },
  },


  listItemsContainer: {
    background: '#E7E7E7',
    margin: '1rem auto',
  },
  listItemBox: {
    display: 'flex',
  },
  listItemBoxNumber: {
    marginRight: '1rem',
  },

  textarea: {
    '& .MuiInputBase-root': {
      background: '#FFF',
      border: '1px solid rgba(0, 0, 0, 0.42)',
      borderBottom: 'transparent',
    },
  },
  gridItemButton: {
    '&.MuiGrid-root.MuiGrid-item': {
      paddingTop: '.5rem',
      paddingBottom: '1.5rem',
    },
  },
  doneButton: {
    alignSelf: 'flex-end',
    minWidth: 150,
  },
}));

export default useStyles;
