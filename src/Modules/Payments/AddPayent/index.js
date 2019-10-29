import React, { Fragment, useState } from 'react';
import { DialogBottom } from '../../../Components/Dialogs/Utils';
import Button from '@material-ui/core/Button';

const AddPayment = ({ id }) => {
  console.log(id);
  return (
    <Fragment>
      <DialogBottom>
        <Button variant="contained" color="primary">
          SAVE PAYMENT
        </Button>
      </DialogBottom>
    </Fragment>
  );
};

export default AddPayment;
