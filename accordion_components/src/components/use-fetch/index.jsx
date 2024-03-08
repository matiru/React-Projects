import { useEffect ,useState} from "react";





export default function useFetch(url, options={}){

    const[data, setData] = useState(null);
    const[pending, setPending] = useState(false);
    const[error, setError] = useState(null);



    async function fetchData(){

        setPending(true);
        try{
            const res = await fetch(url, {...options});
            if(!res.ok){
                throw Error(res.statusText);
            }
            const result = await res.json();
            setData(result);
            console.log(result);
            setPending(false);
            setError(null);
           
            
        }catch(err){
            setError(err);
            setPending(false);
        }

    }


    useEffect(()=>{

        fetchData()

    },[url])


    return {data, pending, error};
     
}