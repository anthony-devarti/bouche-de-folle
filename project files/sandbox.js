//this should get the information needed from the restaurant API.  Will turn into utils/data.js
import axios from "axios";

export default async function getData(){
    let response = await axios.get('https://sheltered-refuge-85246.herokuapp.com/api/json');
    return response.data
}


//Routes should exist as a folder that holds all of the different categories of menu items, by cuisine  french, vietnamese, italian, and korean

//french
import React, { useEffect, useState, UseState } from 'react';
import getData from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export default function French(){
    const [french, setFrench] = useState([]);

   useEffect(() => { 
    let data = getLocalStorage();
    if (data.length > 0) {
        setFrench(data);
    } else {
        getData()
        .then((data)=> {
            setFrench(data);
            setLocalStorage(_,data)
        })
    }
}, []);

return(
    //some jsx that constructs the french page goes here
)