//imports

import React, { useEffect, useState } from 'react';
import getData from '../utils/data.js';
import { getLocalStorage, setLocalStorage } from '../utils/localstorage';

export default function Menu() {
  const ENDPOINT = 'Menu';
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setMenu(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setMenu(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
    <main style={{ padding: "1rem 0" }} className="container">
      <div className="row justify-content-center text-center gap-2">
        <h2>Menu</h2>
        {menu.map((menu) => <Menus key={menu.id} Menus={menu} />)}
      </div>
    </main>
  );
}


const Menus = ({ Menu }) => {
  return (
    <div className='card col-5 p-3'>
      <h2>{Menus.name}</h2>
    </div>
  )
}