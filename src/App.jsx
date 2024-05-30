import { useCallback, useEffect, useState } from "react";
import { getCoins } from "./api/api";
import { CoinsContext } from "./components/context/coinsContext";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  const [balance, setBalance] = useState(50000);
  const [coins, setCoins] = useState([]);
    // sostoianie chtoby filtrazia obnavlialas
  const [filteredCoins, setFilteredCoins] = useState([]);

  // pri zagruzke prilozhenia, setFilter i Coin
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    };
    fetchData();
  }, []);

  // useCallback function that goes to OnClick
  const addBalance = useCallback(() => {
    setBalance((prev) => prev + 1000);
  }, []);

  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header />
        <Main
          setCoins={setFilteredCoins}
          coins={coins}
          balance={balance}
          setBalance={addBalance}
          filteredCoins={filteredCoins}
        />
      </CoinsContext.Provider>
    </>
  );
}

export default App;
