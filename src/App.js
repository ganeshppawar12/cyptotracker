import "./App.css";
import Navbar from "./Compmonents/Navbar";
import { Route, Routes } from "react-router-dom";
import MainHeroSection from "./Compmonents/MainHeroSection";
import { useEffect, useState } from "react";
import { CreateConrextmodel } from "./Context/ContextApi";
import { useContext } from "react";

function App() {
  const counterst = useContext(CreateConrextmodel);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  // const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const { currency, setCurrency, symbol, setSymbol,toggel,page } = counterst;
  const fetchData = async () => {
    setLoad(true);
    const res = await fetch(
      ` https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );
    const data = await res.json();
    setLoad(false);
    setCoins(data);
  };

  const handleSearch = () => {
    return coins.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.symbol.toLowerCase().includes(search) ||
        item.name.includes(search) 
    );
  };

  useEffect(() => {
    fetchData();
  }, [currency]);

  return (
    <div className={toggel ? "App2" : "App"}>
      <Navbar
        setSearch={setSearch}
      ></Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <MainHeroSection
              handleSearch={handleSearch}
              load={load}
            ></MainHeroSection>
          }
        ></Route>
        {/* <Route path='/:id' element={<SingleCoin></SingleCoin>} ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
