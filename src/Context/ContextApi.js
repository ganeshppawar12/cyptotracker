import { createContext, useEffect, useState } from "react";

export const CreateConrextmodel = createContext();

export const Contextstate = ({children})=>{
  
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [toggel, setToggel] = useState(false);
  const [page, setPage] = useState(1);


  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

    return( <CreateConrextmodel.Provider value={{currency,setCurrency,symbol,setSymbol,toggel,setToggel,page,setPage}}>
{children}
    </CreateConrextmodel.Provider>);
}