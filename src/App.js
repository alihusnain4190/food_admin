import logo from "./logo.svg";
import {useEffect,useState}from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import PizzaList from "./Components/PizzaList";
import axios from "axios";
function App() {
  const {data,setData}=useState([]);
useEffect(async()=>{
const result=await axios.get("https://jsonplaceholder.typicode.com/users");
console.log(result);
},[])
  return (
    <Admin
      dataProvider={lb4Provider("https://jsonplaceholder.typicode.com/users")}
    >
      <Resource name="users" list={PizzaList}></Resource>
    
    </Admin>
  );
}

export default App;
