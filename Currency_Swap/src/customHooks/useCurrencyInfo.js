import { useEffect, useState } from "react";
import Axios from "axios"

 function useCurrencyInfo(currency) {

    const [data, setData]  = useState({})

    useEffect(() => {

        Axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`).then((res) => setData(res.data[currency]))
        console.log(data);
    }, [currency])  
    
    console.log(data);
    return data;
}

export default useCurrencyInfo;