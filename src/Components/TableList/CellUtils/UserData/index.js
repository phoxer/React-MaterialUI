import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import useStyle from './styles';
const UserData = ({name,email,picture}) =>{
    const classes = useStyle();
    return (<Box display="flex" alignItems="center">
        {picture && <Avatar src={picture} className={classes.user_picture} />}
        <Box alignItems="center">
            <Typography variant="h5" className={classes.user_name} gutterBottom>{name}</Typography>
            <Typography variant="h6" className={classes.user_email}>{email}</Typography>
        </Box>
    </Box>)
}

export default UserData;