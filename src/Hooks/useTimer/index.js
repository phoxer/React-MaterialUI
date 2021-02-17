import {useState,useEffect} from 'react';

const useTimer = (time) =>{

    const [timeOut, setTimeOut] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=>setTimeOut(true), time);
        return ()=>clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return timeOut
}

export default useTimer;