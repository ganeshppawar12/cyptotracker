
import './App.css';
import Navbar from './Compmonents/Navbar';
import {Route ,Routes} from 'react-router-dom'
import MainHeroSection from './Compmonents/MainHeroSection';
// import CoinInfo from './Compmonents/SingalCoin/CoinInfo';
import { useEffect, useState } from 'react';
// import SingleCoin from './Compmonents/SingalCoin/SingleCoin';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);
  const fetchData = async () => {
    setLoad(true)
    const res = await fetch(
     ` https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );
    const data = await res.json();
    setLoad(false)
    setCoins(data);

  };

  const handleSearch = ()=>{
    return coins.filter((item)=>
    item.name.toLowerCase().includes(search) ||
    item.symbol.toLowerCase().includes(search)
    )
  }

  useEffect(() => {
    fetchData();
  }, [currency]);




  return (
    <div className="App">
    <Navbar setSearch={setSearch} setCurrency={setCurrency} currency={currency}></Navbar>
    <Routes>
      <Route path='/' element={<MainHeroSection coins={coins} handleSearch={handleSearch} page={page} setPage={setPage} setCurrency={setCurrency} currency={currency} load={load} symbol={symbol}></MainHeroSection>}></Route>
      {/* <Route path='/:id' element={<SingleCoin></SingleCoin>} ></Route> */}
    </Routes>
   
    </div>
  );
}

export default App;
