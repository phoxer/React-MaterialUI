const apiBaseUrl = 'https://jsonplaceholder.typicode.com/';

const makeServerCall = (node, config, callBack) => {
  fetch(`${apiBaseUrl}${node}`, config)
    .then(response => {
      console.log('makeServerCall', response);
      return response.json();
    })
    .then(data => {
      callBack(data);
    })
    .catch(function(error) {
      callBack({ error: error.message });
    });
};

const fetchData = {
  get: (node, callBack) => {
    makeServerCall(
      node,
      {
        method: 'GET',
        credentials: 'same-origin',
      },
      callBack,
    );
  },
  post: (node, data, callBack) => {
    makeServerCall(
      node,
      {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      callBack,
    );
  },
};

export default fetchData;
