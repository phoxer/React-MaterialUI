import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import useStyle from './styles';

const UrlButton = ({ icon,text,url,color,target='_blank' }) => {
    const classes = useStyle({ color: color });
    const goToURL = () =>{
        window.open(url,target);
    }
    return (
        <Box align="center" p={0} m={0} onClick={goToURL} className={classes.url_button}>
            {icon && <IconButton className={classes.icon}>{React.createElement(icon)}</IconButton>}
            {text}
        </Box>
    );
};

export default UrlButton;
