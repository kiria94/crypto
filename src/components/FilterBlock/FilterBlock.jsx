import React, { useContext, useEffect } from "react";
import { useFilterCoins } from "../../helpers/hooks/useFilterCoins";
import { CoinsContext } from "../context/coinsContext";
import "./styles.css";

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;
  // const [value, setValue] = useState("");
  // const InputRef = useRef(null);
  // console.log(InputRef);

  // useEffect(() => {
  //   const filteredCoins = coins.filter((coin) => {
  //     return coin.name.toLowerCase(f               bbbbbbbbbbbbbbbbbbbbbbbbbbbii
  // }, [value]);
  const { value, setValue } = useFilterCoins(coins, setCoins);

  return (
    <div className="filter-block">
      <input
        id="#"
        // ref={InputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        // input="input"
        type="text"
        placeholder="bitcoin"
      />
    </div>
  );
};

export default React.memo(FilterBlock);
