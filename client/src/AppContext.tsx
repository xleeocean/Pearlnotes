import React, { useState, createContext, FC } from "react";

const API_URL = 'http://localhost:3002'

interface ITypeProfile {
  src: string,
  name: string,
  width: string,
}

interface IProductProfile {
  id: string,
  title: string,
  image: string,
  typeStr: string,
  description: string,
  price: string,
  merchandiseId: string,
}

interface ICarItem {
  merchandiseId: string,
  merchandiseLineId: string,
  quantity: number,
}

interface ICar {
  id: string,
  products: ICarItem[],
  totalAmount: string,
}

interface IAppContextInterface {
  selected: string,
  setSelected?: React.Dispatch<React.SetStateAction<string>>,
  pearlTypes: ITypeProfile[],
  jewelryTypes: ITypeProfile[],
  products: IProductProfile[],
  selectedProducts: IProductProfile[],
  fetchProducts?: (reverse: string, type: string) => Promise<void>,
  cart: ICar,
  addProductToCart?: (product: IProductProfile) => Promise<void>,
  updateCartItemQuantity?: (merchandiseLineId: string, quantity: number) => Promise<void>,
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
  ],
  products: [],
  cart: {
    id: '',
    products: [],
    totalAmount: '0.0'
  },
  selectedProducts: [],
}

const AppContext = createContext<IAppContextInterface>(defaultState);

const AppProvider: FC = ({ children }) => {
  const [selected, setSelected] = useState(defaultState.selected);
  const [pearlTypes] = useState(defaultState.pearlTypes);
  const [jewelryTypes] = useState(defaultState.jewelryTypes);
  const [products, setProducts] = useState(defaultState.products);
  const [cart, setCart] = useState(defaultState.cart);
  const [selectedProducts, setSelectedProducts] = useState<IProductProfile[]>([]);

  const fetchProducts = async(reverse: string, type: string) => {
    try {
      const response = await fetch(`${API_URL}/products/list?reverse=${reverse}&type=${type}`, {mode:'cors'});
      const products = await response.json();
      setProducts(products);
      console.log(products);
    } catch (err) {
      console.log(err);
    }
    setSelected(type);
  }

  const addProductToCart = async(product: IProductProfile) => {
    const requestOptions: any = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    };
    var body: any = { merchandiseId: product.merchandiseId, quantity: 1 }
    try {
      if (cart.id.length === 0) {
        requestOptions.body = JSON.stringify(body);
        const response = await fetch(`${API_URL}/cart/create`, requestOptions);
        setCart(await response.json());
      } else {
        body.cartid = cart.id;
        requestOptions.body = JSON.stringify(body);
        const response = await fetch(`${API_URL}/cart/add`, requestOptions);
        const cartData = await response.json();

        console.log(cartData);
        setCart(cartData);
      }
      setSelectedProducts([...selectedProducts, product]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateCartItemQuantity = async(merchandiseLineId: string, quantity: number) => {
    const requestOptions: any = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({cartid: cart ? cart.id : '', merchandiseLineId: merchandiseLineId, quantity: quantity}),
    };
    try {
      const response = await fetch(`${API_URL}/cart/updateQuantity`, requestOptions);
      setCart(await response.json());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value = {{
        selected,
        setSelected,
        pearlTypes,
        jewelryTypes,
        products,
        fetchProducts,
        addProductToCart,
        updateCartItemQuantity,
        cart,
        selectedProducts,
      }}
    >
      { children }
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider};
export interface IProductType extends ITypeProfile {};
export interface IProduct extends IProductProfile{};
export interface ICarItemProfile extends ICarItem{};