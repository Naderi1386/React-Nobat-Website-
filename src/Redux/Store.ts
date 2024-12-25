import { configureStore } from "@reduxjs/toolkit";
import favoritiesReducer, { FavoritesStateType } from "./Favorites";
import { persistStore, persistReducer } from "redux-persist";
import turnReducer, { TurnStateType } from "./Turn";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const persistTurnsConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, favoritiesReducer);
const persistedTurnsReducer = persistReducer(persistTurnsConfig, turnReducer);

export const store = configureStore({
  reducer: {
    favorites: persistedReducer,
    turn: persistedTurnsReducer,
  },
});
export const persistor = persistStore(store);

export type DispatchType = typeof store.dispatch;
export type StoreType = ReturnType<typeof store.getState>;

interface SelectorType {
  favorites: FavoritesStateType;
  turn: TurnStateType;
}

export const getFavorites = (store: SelectorType) => store.favorites.favorites;
export const getFavorite = (id: string) => (store: SelectorType) =>
  store.favorites.favorites.find((doctor) => doctor.id === id);

export const getTurn = (id: string) => (store: SelectorType) =>
  store.turn.turns.find((t) => t.doctor.id === id);
export const getTurns=(store:SelectorType)=>store.turn.turns
