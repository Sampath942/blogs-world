import { useEffect, useState } from "react";
const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPending,setisPending]=useState(true);
    const [error,setError]=useState(null);
    
useEffect(()=>{
    const abortCont=new AbortController();
    fetch(url, {signal:abortCont.signal}).then(
      (res)=>{
        if(!res.ok){
          throw Error('The resource could not be fetched');
        }
        return res.json();
      }
    ).then((data)=>{
      setData(data);
      setisPending(false);
      setError(null);
    }).catch((err)=>{
        if(err.name==='AbortError')
        {
          console.log("abort error catched");
        }
        else{
      setisPending(false);
      setError(err.message);}
      
    })
    return ()=>{abortCont.abort()};
  },[url]);
  return { data,isPending,error };
}
export default useFetch;