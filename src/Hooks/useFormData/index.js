import {useEffect, useReducer} from 'react';

const dataReducer = {
    'ADD_FIELD' : (state, data) => {
        return {...state,...data}
    },
    'DATA_CHANGE': (state, data) => {
        return {...state,...data}
    }
}

const formReducer = (state, action) => {
    return dataReducer[action.type](state, action.data);
};

const useFormData = (fieldsData) =>{
    const [formData,setFormData] = useReducer(formReducer,{});

    const onDataChange = (currentTarget) =>{
        setFormData(currentTarget.value);
    }

    useEffect(()=>{
       fieldsData.forEach(fieldData => {
            const {id,label,value,errorMessage} = fieldData;
            const data={[id]:{
                id,label,defaultValue:value,error:false,onChange:(evt)=>onDataChange(evt.currentTarget)
            }};
            setFormData({type:'ADD_FIELD',data})
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    


    return formData;
}


export default useFormData;