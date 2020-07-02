/** Api Fetch V 2.0.1 by Phoxer.com */

const apiUrl = 'https://jsonplaceholder.typicode.com/';

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

const serverCall = async (url, config) => {
    return await fetch(url, config).then((rsp) => {
        return rsp.json();
    }).then((data) => {
        return data;
    }).catch((error) => {
        return { error: error.message };
    });
};

const fetchData = {
    get: async (endPoint, data = null) => {
      const url = `${apiUrl}${endPoint}`;
      const urlParams = data ? `${url}?${new URLSearchParams(data).toString()}` : url;
      return await serverCall(urlParams, {
        method: 'GET',
        credentials: 'same-origin'
      });
    },
    post: async (endPoint, data) => {
        return await serverCall(`${apiUrl}${endPoint}`, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: buildDataToSend(data)
        });
    },
    json: async (url) =>{
      return await serverCall(url, {
        method: 'GET',
        credentials: 'same-origin'
      });
    }
}

export default fetchData;