import axios from "axios";

export default async function getData(endpoint){
    let response = await axios.get(`http://sheltered-refuge-85246.herokuapp.com/api/category`);
    console.log(response)
    return response.data
}