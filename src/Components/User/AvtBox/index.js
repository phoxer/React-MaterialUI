import React, { useRef, useLayoutEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useStyle from './styles';

const UserPicture = ({ classes, name, avatar }) => {
  if (avatar) {
    return <Avatar alt={name} src={avatar} className={classes.avatar} />;
  }

  return (
    <Avatar alt={name} className={classes.avatar}>
      {name.charAt(0)}
    </Avatar>
  );
};

const AvtBox = ({ name, avatar, email, text }) => {
  const avtRef = useRef();
  const classes = useStyle();

  return (
    <div ref={avtRef} className={classes.container}>
      <UserPicture name={name} avatar={avatar} classes={classes} />
      <div className={classes.info}>
        <Typography variant="h3">{name}</Typography>
        {email && <Typography variant="h4">{email}</Typography>}
        {text && <Typography variant="h5">{text}</Typography>}
      </div>
    </div>
  );
};

export default AvtBox;
