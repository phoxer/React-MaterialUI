import React,{Fragment,useState} from 'react';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import useStyles from './styles';

const LongText = ({ text,maxCharacters=5 }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handlePopoverOpen = ({currentTarget}) => {
        setAnchorEl(currentTarget);
    };
    
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    return (<Fragment>
        <Box className={classes.long_text} p={0} m={0} aria-owns={open ? 'pop-cell-text' : undefined} aria-haspopup="true" onClick={handlePopoverOpen}>
            {text.substring(0,maxCharacters) + '...'}
        </Box>
        <Popover id="pop-cell-text"
        open={open}
        anchorEl={anchorEl}
        classes={{
            paper: classes.popover,
          }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {text}
      </Popover>
    </Fragment>);
};

export default LongText;

/*
anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        */