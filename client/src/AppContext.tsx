import React, { useState, createContext, FC } from "react";

interface ITypeProfile {
  src: string,
  type: string,
  width: string,
}

interface IAppContextInterface {
  selected: string,
  setSelected?: React.Dispatch<React.SetStateAction<string>>,
  pearlTypes: ITypeProfile[],
  jewelryTypes: ITypeProfile[],
  // cartItems: {
  //   id: string;
  //   tilte: string;
  //   price: number;
  //   quantity: number;
  // }[]
}

const defaultState = {
  selected: '',
  pearlTypes: [
    {
      src: '/assets/Tahitian2.jpeg',
      type: 'Tahitian',
      width: '30%',
    },
    {
      src: '/assets/SouthSeaGold1.jpeg',
      type: 'South Sea Gold',
      width: '40%',
    },
    {
      src: '/assets/freshwater.jpg',
      type: 'Freshwater',
      width: '30%',
    },
    {
      src: '/assets/akoya.jpeg',
      type: 'Akoya',
      width: '50%',
    },
    {
      src: '/assets/baroque.jpeg',
      type: 'Baroque',
      width: '50%',
    },
  ],
  jewelryTypes: [
    {
      src: '/assets/Necklace.jpeg',
      type: 'Necklace',
      width: '50%',
    },
    {
      src: '/assets/Bracelets.jpeg',
      type: 'Bracelet',
      width: '50%',
    },
    {
      src: '/assets/Pendant.jpeg',
      type: 'Pendant',
      width: '30%',
    },
    {
      src: '/assets/earrings.jpeg',
      type: 'Eearrings',
      width: '40%',
    },
    {
      src: '/assets/ring2.jpeg',
      type: 'Ring',
      width: '30%',
    },
  ]
}

const AppContext = createContext<IAppContextInterface>(defaultState);

const AppProvider: FC = ({ children }) => {
  const [selected, setSelected] = useState(defaultState.selected);
  const [pearlTypes] = useState(defaultState.pearlTypes);
  const [jewelryTypes] = useState(defaultState.jewelryTypes);

  return (
    <AppContext.Provider
      value = {{
        selected,
        setSelected,
        pearlTypes,
        jewelryTypes,
      }}
    >
      { children }
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider};
export interface IProductType extends ITypeProfile {};