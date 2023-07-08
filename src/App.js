import React, { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Item from "./components/Item";
import FavItem from "./components/FavItem";
import { addFav, fetchAnother, fetchLoading, removeFav } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function App() {
  let loading = useSelector(store=>store.loading);
  let data = useSelector(store=>store.data);
  let favs = useSelector(store=>store.favItem);
 
  const dispatch=useDispatch();
  const API='https://api.coindesk.com/v1/bpi/currentprice.json';

useEffect(()=>{
  dispatch(fetchLoading());
  dispatch(fetchAnother())},[]);
  function addToFavs() {
    dispatch(addFav(data))
  }
  useEffect(()=>{console.log("loaddding",loading)
   },[loading])

  function yeniTalep(){
    dispatch(fetchLoading());

    dispatch(fetchAnother());
  }


  return (
    <div className="wrapper max-w-xl mx-auto px-4">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Rastgele
        </NavLink>
        <NavLink
          to="/favs"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Favoriler
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/">
          {loading && <div className="bg-white p-6 text-center shadow-md">YÜKLENİYOR</div>}
          <Item  />

          <div className="flex gap-3 justify-end py-3">
            <button
            onClick={yeniTalep}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başka bir tane
            </button>
            <button
              onClick={addToFavs}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Favorilere ekle
            </button>
          </div>
        </Route>

        <Route path="/favs">
          <div className="flex flex-col gap-3">
            {favs!=undefined && favs.length > 0
              ? favs.map((item) => (
                <FavItem key={item.key} id={item.id} title={ item.favvItem.split(' ').slice(0,2).join(' ')} />
              ))
              : <div className="bg-white p-6 text-center shadow-md">Henüz bir favoriniz yok</div>
            }
          </div>
        </Route>
      </Switch>
    </div>
  );
}
