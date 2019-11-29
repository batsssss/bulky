import React from 'react';
import {
  createMuiTheme, ThemeProvider,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
  shape: {
    borderRadius: 0,
  },
});

function AppButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>
  );
}

export default AppButton;
