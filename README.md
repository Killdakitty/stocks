## 1 HOMEOWRK W8D4
npm install react-router-dom

at index. js
import {BrowserRouter as Router} from 'react-router-dom'

<Router>   <App />
    </Router>

## 2 create your pages 
A common convention is to create two folders, components and pages. Any component that is used as a piece of UI goes in the components folder, any component meant to act as a "page" of the website goes in pages.


## 3 App.js 
import {Routes, Route} from 'react-router-dom'
*** / = homepage

import Home from './Pages/Home'
import Stock from './Pages/Stock'


 <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/Stock' element={<Stock />}/> 

      </Routes>

## 4 Nagivation 
import { Link } from "react-router-dom"
export default function Nav(){
return(
<div className="nav">
    <Link to='/' >
    <div>Home</div>
    </Link>)}

##
app.js
        <Route path='/stock/:symbol' element={<Stock />}/> 

## stock data-js
import { Link } from "react-router-dom"

export default function StockData(props){
    const stocks = [
        
      ]

return (

<div>
{stocks.map(each=>{
    const {name, symbol} =each;

    return(
        <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
            </Link>
    )
})}

</div>
)
    }
 
      
## stocks.js


https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=YOUR_API_KEY
[ {
    "symbol" : "AAPL",
    "price" : 120.96000000,
    "volume" : 332607163
} ]

https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=59527d605bf847cfae56804dfdc67352

https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_COINAPI_KEY}