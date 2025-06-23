import { createContext } from 'react';

const AppContext = createContext({
  items: [],
  cartItems: [],
  favorites: [],
  isItemAdded: () => {},
  isItemFavorited: () => {},
  onAddFavorite: () => {},
  onAddToCart: () => {},
  setCartOpened: () => {},
  setCartItems: () => {}
});

export default AppContext;