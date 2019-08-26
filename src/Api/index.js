const apiBaseUrl = 'https://jsonplaceholder.typicode.com/';

const buildDataToSend = data => {
  const formData = new FormData();
  let formKey;
  const createFormData = (obj, namespace = '') => {
    if (typeof obj === 'object') {
      for (let propertyName in obj) {
        if (!obj.hasOwnProperty(propertyName) || !obj[propertyName]) continue;
        formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;
        if (obj[propertyName] instanceof Date) {
          formData.append(formKey, obj[propertyName].toISOString());
        } else if (obj[propertyName] instanceof Array) {
          // eslint-disable-next-line no-loop-func
          obj[propertyName].forEach((element, index) =>
            createFormData(element, `${formKey}[${index}]`),
          );
        } else if (
          typeof obj[propertyName] === 'object' &&
          !(obj[propertyName] instanceof File)
        ) {
          createFormData(obj[propertyName], formKey);
        } else {
          formData.append(formKey, obj[propertyName].toString());
        }
      }
    } else {
      formData.append(namespace, obj.toString());
    }
  };
  createFormData(data);
  return formData;
};

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
        body: buildDataToSend(data),
        credentials: 'same-origin',
      },
      callBack,
    );
  },
};

export default fetchData;
