import React, { useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useDomSize } from '../../Utils/size';
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

const AvtBox = ({ name, avatar, email }) => {
  const classes = useStyle();
  const avtRef = useRef();
  const domSize = useDomSize(avtRef);

  console.log('domSize', domSize);
  return (
    <div ref={avtRef} className={classes.container}>
      <UserPicture name={name} avatar={avatar} classes={classes} />
      <div className={classes.info}>
        <Typography variant="h3">{name}</Typography>
      </div>
    </div>
  );
};

export default AvtBox;
