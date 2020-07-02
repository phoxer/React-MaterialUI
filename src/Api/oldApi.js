/** Api Fetch V 1.2.3 by Phoxer.com */

const apiBaseUrl = 'https://jsonplaceholder.typicode.com/';

const buildDataToSend = data => {
  const formData = new FormData();
  const createFormData = (obj, namespace = '') => {
    let formKey;
    if(typeof obj !== 'object'){
      formData.append(namespace, obj);
    }else{
        for (let prop in obj) {
          formKey = namespace ? `${namespace}[${prop}]` : prop;
          if(typeof obj[prop] === 'object'){
            if (obj[prop] instanceof Array) {
              // eslint-disable-next-line no-loop-func
              obj[prop].forEach((element, index) =>{
                createFormData(element, `${formKey}[${index}]`,true)
              });
            }else if (obj[prop] instanceof Date) {
              formData.append(formKey, obj[prop].toISOString());
            }else if (obj[prop] instanceof File) {
              formData.append(formKey, obj[prop]);
            }else{
              createFormData(obj[prop],formKey);
            }
          }else{
            if(obj[prop]!==undefined){
              formData.append(formKey, obj[prop]);
            } 
          }
      }
    }
  };
  createFormData(data);
  return formData;
};

const makeServerCall = (node, config, callBack) => {
  fetch(`${apiBaseUrl}${node}`, config)
    .then(response => {
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
        credentials: 'same-origin'
      },
      callBack,
    );
  },
  post: (node, data, callBack) => {
    makeServerCall(
      node,
      {
        method: 'POST',
        credentials: 'same-origin',
        body: buildDataToSend(data),
      },
      callBack,
    );
  },
};

export default fetchData;
