import { render } from "@testing-library/react";
import React from 'react'

class SearchBill extends React.Component {
    myList= {
        myArray : ["GSTNo.","Mobile Number"]
    }


render(){
    return (
        <div>
        <select>
        {this.myList.myArray.map(data=>(<option title={data}>{data}</option>))}
        </select>
        </div>

    );
}
}
export default SearchBill;