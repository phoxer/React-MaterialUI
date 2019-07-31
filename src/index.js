import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fetchData from './Api';

const FetchHookSample = () => {
  const getUsers = () => {
    fetchData.get('users/', data => {
      console.log(data);
    });
  };

  const getUser = () => {
    fetchData.get('users/2', data => {
      console.log(data);
    });
  };

  const postUser = () => {
    fetchData.post('users', { id: 700, name: 'roberto' }, data => {
      console.log(data);
    });
  };

  return (
    <Fragment>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick={getUsers}>
          GET USERS
        </button>
        <button type="button" className="btn btn-secondary" onClick={getUser}>
          GET USER
        </button>
      </div>
      <hr />
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick={postUser}>
          POST USERS
        </button>
      </div>
    </Fragment>
  );
};

ReactDOM.render(<FetchHookSample />, document.getElementById('root'));
