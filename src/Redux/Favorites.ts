import { createSlice } from "@reduxjs/toolkit";

export interface FavoriteType {
  name: string;
  specialty: string;
  phone: string;
  image:string 
  id:string
}

export interface FavoritesStateType{
    favorites:FavoriteType[]
}

const initialState:FavoritesStateType={
    favorites:[]
}

type ActionEditDoctor={payload:FavoriteType}
type ActionRemoveDoctor={payload:string}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addDoctor(state, action: ActionEditDoctor) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeDoctor(state,action:ActionRemoveDoctor) {
        state.favorites=state.favorites.filter((doctor)=>doctor.id!==action.payload)

    },
  },
});

export const {addDoctor,removeDoctor}=favoritesSlice.actions

export default favoritesSlice.reducer
