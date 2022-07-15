import "./Items.css";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { TextField } from "@react-ui-org/react-ui";


export const Items = ({itemList,setItemList,rowCount}) => {
  //console.log("Itens list in Items.js is ",itemList);
  const [items, setItems] = useState({
    name: "",
    hsnorSacCode: "",
    unit: "",
    cost: "",
    gstRate:""
    });
    const [data, setData] = useState([]);
    console.log("item", items, data);

  const handleChange = (e) => {
      setItems({ ...items, [e.target.name]: e.target.value });
      if(items.size<rowCount)
        {
          setItems({ name: "", hsnorSacCode: "", unit: "", cost: "",gstRate:"" });
        }
      };

  // const handleClick = (e) => {
  //       setData((pre) => [...pre, items]);
  //       ;
  //       };
  // const handlenameChange = (e) => {
  //   setItemsList(prev=>[prev,{name:e.target.value}])
  // };
  // const handlehsnorsacChange = (e) => {
  //   setItemsList([{name:'',unit:'',cost:'',gstRate:'',[e.target.name]:e.target.value}]);
  // };
  // const handleunitChange = (e) => {
  //   setItemsList([{...itemList,unit:e.target.value}]);
  // };
  // const handlecostChange = (e) => {
  //   setItemsList([{...itemList,cost:e.target.value}]);
  // };
  // const handlegstChange = (e) => {
  //   setItemsList([{...itemList,gstRate:e.target.value}]);
  // };

  return (
    <div className="overflow-x-scroll ">
      {/* <TextField label =' Item Name'  placeholder='Enter Item Name' required={true} type='text' onChange={(e)=>handlenameChange(e)}></TextField>
        <TextField  label ='HSNorSACCode'  placeholder='Enter HSN or SAC Code' required={true} type='text' onChange={(e)=>handlehsnorsacChange(e)}></TextField>
        <TextField label ='Units'  placeholder='Enter Units' required={true} type='text' onChange={(e)=>handleunitChange(e)}></TextField>
        <TextField label ='Cost'  placeholder='Enter Item Cost' required={true} type='text' onChange={(e)=>handleunitChange(e)}></TextField>
        <TextField id='GST' label =' GST Rate' placeholder='Enter GST Rate' required={true} type='text' onChange={(e)=>handlegstChange(e)}></TextField> */}
      {[...Array(rowCount)].map((x) => (
          <div className="flex w-full my-2">
          <div className="w-1/3 flex-shrink-0 flex-grow-0 ">
            <span className="mr-4 ">Item Name: : </span>
            <input type="text" placeholder="Enter Item Name" required  value={items.name} name="name" onChange={handleChange} />
          </div>
          <div className="w-1/3 flex-shrink-0 flex-grow-0">
            <span className="mr-4">HSNorSACCode: </span>
            <input type="text" placeholder="Enter HSN or SAC Code" required value={items.hsnorSacCode} name="hsnorSacCode" onChange={handleChange} />
          </div>
          <div className="w-1/3 flex-shrink-0 flex-grow-0">
            <span className="mr-4">Units: </span>
            <input type="text" placeholder="Enter Units" required  value={items.unit} name="unit" onChange={handleChange} />
          </div>
          <div className="w-1/3 flex-shrink-0 flex-grow-0">
            <span className="mr-4">Cost: </span>
            <input type="text" placeholder="Enter Item Cost" required value ={items.cost} name="cost" onChange={handleChange} />
          </div>
          <div className="w-1/3 flex-shrink-0 flex-grow-0">
            <span className="mr-4">GST Rate: </span>
            <input type="text" placeholder="Enter GST Rate" required value={items.gstRate} name="gstRate" onChange={handleChange} />
          </div>
        </div>
       
      ))}
      
      </div>
   
  );
};
