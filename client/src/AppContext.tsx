import React, { useState, createContext, FC } from "react";

interface ITypeProfile {
  src: string,
  name: string,
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
      name: 'Tahitian',
      width: '30%',
    },
    {
      src: '/assets/SouthSeaGold1.jpeg',
      name: 'South Sea Gold',
      width: '40%',
    },
    {
      src: '/assets/freshwater.jpg',
      name: 'Freshwater',
      width: '30%',
    },
    {
      src: '/assets/akoya.jpeg',
      name: 'Akoya',
      width: '50%',
    },
    {
      src: '/assets/baroque.jpeg',
      name: 'Baroque',
      width: '50%',
    },
  ],
  jewelryTypes: [
    {
      src: '/assets/Necklace.jpeg',
      name: 'Necklace',
      width: '50%',
    },
    {
      src: '/assets/Bracelets.jpeg',
      name: 'Bracelet',
      width: '50%',
    },
    {
      src: '/assets/Pendant.jpeg',
      name: 'Pendant',
      width: '30%',
    },
    {
      src: '/assets/earrings.jpeg',
      name: 'Eearrings',
      width: '40%',
    },
    {
      src: '/assets/ring2.jpeg',
      name: 'Ring',
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