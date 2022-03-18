import React, { useState, createContext, FC } from "react";

interface AppContextInterface {
  // drawer: boolean;
  selected: string[];
  setSelected?: React.Dispatch<React.SetStateAction<never[]>>;
  // cartItems: {
  //   id: string;
  //   tilte: string;
  //   price: number;
  //   quantity: number;
  // }[]
}

const defaultState = {
  // drawer: false,
  selected: []
}

const AppContext = createContext<AppContextInterface>(defaultState);

export const AppProvider: FC = ({ children }) => {
  const [selected, setSelected] = useState(defaultState.selected);

  return (
    <AppContext.Provider
      value = {{
        selected,
        setSelected,
      }}
    >
      { children }
    </AppContext.Provider>
  );
};