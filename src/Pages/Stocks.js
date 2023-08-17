import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
export default function Stocks(props){

    const [coin, setCoin]=useState('null');
    const apiKey='59527d605bf847cfae56804dfdc67352';
    const params= useParams(); //params is an object 
  const {symbol}= params;
  const url=`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_COINAPI_KEY}`;


  const getCoin=async()=>{
    try{
    const res = await fetch(url);
    const dataArr = await res.json();
    const data= dataArr[0]
    console.log(data);
    setCoin(data);
    }catch(e){
        console.log("error fetching data",e);
    }
  }


  //run as soon as the components mounts 
  useEffect(()=>{
    getCoin();
  },[])
 //show the fetched data
const loaded =()=>{
    return(
<div>
<h1>
    {coin.symbol}
</h1>
<h2>{coin.price}</h2>

</div>

    )
}
//show a loading msg
const loading = () =><h1>loading~...</h1>

//check if coin and coin.rate is true, call loaded function else show loading 
  return coin &&  coin.price ? loaded(): loading();
}