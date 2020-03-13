import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  Card,
  CardActions,
  CardHeader,
  IconButton,
  FormControl,
  Select,
  TextField,
  InputLabel,
  Divider,
  Button,
  Grid,
  CardContent,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { red } from '@material-ui/core/colors';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';
import SelectPriority from './SelectPriority';
import styles from './cardEditing.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid var(--light-blue)',
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // margin: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  startRoot: {
    widht: '20px',
  },
  starColor: {
    color: 'var(--light-gray)',
  },
  label: {
    textAlign: 'center',
    fontFamily: 'HelveticaNeueCyrBold, sans-serif',
    color: 'var(--light-gray)',
  },
  cardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    color: 'var(--light-blue)',
    borderColor: 'var(--light-blue)',
    '&:focus': {
      '&.MuiInput-underline:after': {
        borderColor: 'var(--light-blue)',
      },
    },
  },
}));

const CardEditing = () => {
  const classes = useStyles();
  const [chip, setChip] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [difficulty, setDifficulty] = React.useState('');
  const [text, setText] = React.useState('');

  const handleChange = event => {
    setDifficulty(event.target.value);
  };

  const handleChange2 = event => {
    setChip(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleChangeText = event => {
    setText(event.target.value);
  };

  const inputProps = {
    value: text,
    onChange: handleChangeText,
  };
  // console.log('state', chip,
  //   selectedDate,
  //   difficulty,
  //   text);
  return (
    <Card className={classes.root}>
      <form noValidate autoComplete="off">
        <CardHeader
          action={
            <>
              <SelectPriority onChangeDiff={handleChange} value={difficulty} />
              <IconButton
                aria-label="settings"
                color="inherit"
                classes={{
                  root: classes.startRoot,
                  colorInherit: classes.starColor,
                }}
              >
                <StarRoundedIcon />
              </IconButton>
            </>
          }
          classes={{ action: classes.action }}
        />
        <CardContent className={classes.cardContent}>
          <InputLabel className={classes.label} htmlFor="name-quest">
            CREATE NEW QUEST
          </InputLabel>
          <TextField
            className={classes.textField}
            id="name-quest"
            type="text"
            inputProps={inputProps}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </CardContent>
        <CardActions disableSpacing>
          <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
          <Select
            native
            value={chip}
            onChange={handleChange2}
            inputProps={{
              name: 'chip',
              id: 'filled-age-native-simple',
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>

          <IconButton aria-label="close">
            <CloseIcon />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <Button>START</Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default CardEditing;
