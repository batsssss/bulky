import React from 'react';
import cn from 'clsx';
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  List,
  ListItem,
  ListItemSecondaryAction,
  Box,
  Divider,
} from '@material-ui/core';

import useStyles from './use-styles';

function ListItems() {
  const classes = useStyles();
  return (
    <Grid container className={classes.listItemsContainer}>
      <Grid item xs={12}>
        <List>
          <ListItem>
            <Box className={classes.listItemBox}>
              <Box className={classes.listItemBoxNumber}>
                <Typography component="p" align="left">
                          1.
                </Typography>
              </Box>
              <Box>
                <Typography component="p" align="left">
                          Tare the scale Weigh the full product container
                </Typography>
                <Typography component="p" align="left">
                          Weigh the full product container
                </Typography>
              </Box>
            </Box>

            <ListItemSecondaryAction>
              <TextField
                defaultValue={7.3891}
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />

          <ListItem>
            <Box className={classes.listItemBox}>
              <Box className={classes.listItemBoxNumber}>
                <Typography component="p" align="left">
                          2.
                </Typography>
              </Box>
              <Box>
                <Typography component="p" align="left">
                          Tare the scale Weigh the full product container
                </Typography>
                <Typography component="p" align="left">
                          Weigh the empty destination container.
                </Typography>
              </Box>
            </Box>

            <ListItemSecondaryAction>
              <TextField
                defaultValue={2.1987}
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />

          <ListItem>
            <Box className={classes.listItemBox}>
              <Box className={classes.listItemBoxNumber}>
                <Typography component="p" align="left">
                          3.
                </Typography>
              </Box>
              <Box>
                <Typography component="p" align="left">
                          Tare the scale Weigh the full product container
                </Typography>
                <Typography component="p" align="left">
                          Weigh out the target amount.
                </Typography>
              </Box>
            </Box>

            <ListItemSecondaryAction>
              <TextField
                defaultValue={0.0052}
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />

          <ListItem>
            <Box className={classes.listItemBox}>
              <Box className={classes.listItemBoxNumber}>
                <Typography component="p" align="left">
                          4.
                </Typography>
              </Box>
              <Box>
                <Typography component="p" align="left">
                          Tare the scale Weigh the full product container
                </Typography>
                <Typography component="p" align="left">
                          Weigh the empty destination container.
                </Typography>
              </Box>
            </Box>

            <ListItemSecondaryAction>
              <TextField
                defaultValue={2.2039}
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />

          <ListItem>
            <Box className={classes.listItemBox}>
              <Box className={classes.listItemBoxNumber}>
                <Typography component="p" align="left">
                          5.
                </Typography>
              </Box>
              <Box>
                <Typography component="p" align="left">
                          Tare the scale Weigh the full product container
                </Typography>
                <Typography component="p" align="left">
                          Weigh the product container again.
                </Typography>
              </Box>
            </Box>

            <ListItemSecondaryAction>
              <TextField
                defaultValue={7.3838}
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>

        </List>
      </Grid>
    </Grid>
  );
}

export default ListItems;
