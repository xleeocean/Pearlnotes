import React, { useState, createContext, FC } from "react";

interface AppContextInterface {
  selected: string[];
  setSelected?: React.Dispatch<React.SetStateAction<never[]>>;
  pearlType:string[];
  jewelryType:string[];
  // cartItems: {
  //   id: string;
  //   tilte: string;
  //   price: number;
  //   quantity: number;
  // }[]
}

const defaultState = {
  selected: [],
  pearlType: ['Thitian','South Sea Gold', 'Akoya', 'Freshwater', 'Baroque'],
  jewelryType: ['Necklace','Pendant', 'Bracelet', 'Earrings', 'Ring'],
}

const AppContext = createContext<AppContextInterface>(defaultState);

const AppProvider: FC = ({ children }) => {
  const [selected, setSelected] = useState(defaultState.selected);
  const [pearlType] = useState(defaultState.pearlType);
  const [jewelryType] = useState(defaultState.jewelryType);

  return (
    <AppContext.Provider
      value = {{
        selected, setSelected,
        pearlType,
        jewelryType,
      }}
    >
      { children }
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };