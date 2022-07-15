import "./App.css";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Items } from "./Items";

function App() {
  const [billTo, setbillTo] = useState("");
  const [shipTo, setshipTo] = useState("");
  const [supplyPlace, setsupplyPlace] = useState("");
  const [pan, setPan] = useState("");
  const [gstIn, setgstIn] = useState("");
  const [billDate, setBillDate] = useState("");
  const [rowCount, setRowCount] = useState(1);
  // const [name, setName] = useState("");
  // const [hsnorSacCode, sethsnorSacCode] = useState("");
  // const [unit, setUnit] = useState("");
  // const [cost, setCost] = useState("");
  // const [gstRate, setgstRate] = useState("");
  const [itemList,setItemsList]=useState([{name:'',hsnorSacCode:'',unit:'',cost:'',gstRate:''}]);
  const handleshipChange = (e) => {
    setshipTo(e.target.value);
  };
  const handleplaceChange = (e) => {
    setsupplyPlace(e.target.value);
  };
  const handlepanChange = (e) => {
    setPan(e.target.value);
  };
  const handlegstInChange = (e) => {
    setgstIn(e.target.value);
  };
   
const handlebillto=(e)=>{
  setbillTo(e.target.value)
}
  const handlebillDate = (e) => {
    setBillDate(e.target.value);
  };


  const handleSubmit = async(e) => {
    // const url ='https://344f-103-59-74-122.in.ngrok.io'
    // const path='api/v1/purchase-order'
    // const data = {
    //    items:itemList,
    //    billTo:billTo,
    //    shipTo:shipTo,
    //    supplyPlace:supplyPlace,
    //    pan:pan,
    //    gstIn:gstIn
    // } 
    // const res = await fetch(`${url}/${path}`, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    console.log("Items list is ",itemList)
  };

  const handleAddMore = (e) => {
    e.preventDefault();
    setRowCount(rowCount + 1);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2> Rare Concepts </h2>
          <h3> Details Form </h3>
          <form
            className="flex w-full justify-around"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="w-2/5">
              <label align="left">Bill To</label>
              <br />
              <input
                type="text"
                value={billTo}
                required
                onChange={(e) => {
                    handlebillto(e);
                }}
              />
              <br />

              <label>Ship To</label>
              <br />
              <input
                type="text"
                value={shipTo}
                required
                onChange={(e) => {
                  handleshipChange(e);
                }}
              />
              <br />
              <label>Supply Place</label>
              <br />
              <input
                type="text"
                value={supplyPlace}
                required
                onChange={(e) => {
                  handleplaceChange(e);
                }}
              />
              <br />
              <label>Pan</label>
              <br />
              <input
                type="text"
                value={pan}
                required
                onChange={(e) => {
                  handlepanChange(e);
                }}
              />
              <br />
              <label>GSTIN No.</label>
              <br />
              <input
                type="text"
                value={gstIn}
                required
                onChange={(e) => {
                  handlegstInChange(e);
                }}
              />
              <br />
            </div>
            <div className="absolute top-0 start-0">
            <button type="button" id="Search">Search Bill</button>
            </div>
            <div className="w-2/5">
              <label>Bill No.</label>
              <br />
              <input type="text" required />
              <br />
              <label>Bill Date</label>
              <br />
              <input type="date" required />
              <br />
            </div>
          </form>
        </header>
      </div>
      <br />
      <div className="px-4 mb-4 overflow-hidden ">
        <h3>Items Details</h3>
        <Items rowCount={rowCount} setItemsList={setItemsList} itemList={itemList}/>
        <div className="relative h-8">
          <button className="absolute left-0 bottom-0 " id ="AddMore" onClick={handleAddMore}>
            Add More
          </button>
          <button className="absolute right-0 bottom-0" id="Submit" onClick={handleSubmit}> Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
