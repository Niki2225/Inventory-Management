import React,{useState} from 'react';
import {withRouter,useHistory} from 'react-router-dom';
import axios from "axios";
import "./Purchase.css"

function PurchaseAdd(props) {
   const [inputData,setInputData] = useState({Id:"",Name:"",Quantity:"",Price:""});
    // const history = useHistory();

    // function handleSubmit(event){
    //   event.preventDefault();
    //   axios.post('http://localhost:3030/pitems',inputData)
    //     .then(_res =>{
    //     alert("Data Added Successfully!");
    //     history.push("/purchase")
    //   })
    //   .catch((err) => console.log(err));
    // }
    // function handleSubmit(event){
    //   event.preventDefault();
    //   axios.post('http://localhost:3030/pitems',inputData)
    //     .then(_res =>{
    //       alert("Data Added Successfully!");
    //       props.history.push("/purchase");
    //     })
    //     .catch((err) => console.log(err));
    // }
    
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const res = await axios.post('http://localhost:3030/pitems', inputData);
        alert("Data Added Successfully!");
        props.history.push("/purchase");
      } catch (err) {
        console.log(err);
      }
    }
    
  return (
    <>
    <div>
      <div className="AddForm">
        <form onSubmit={handleSubmit}>
        <h2 className="HeadingAdd">Purchase Add</h2>
        <div>
          <label htmlFor="name">Product ID:</label>
          <input type="number" name ="Id" className="form-control"
          onChange={(e)=>setInputData({...inputData,Id:e.target.value})}/>
        </div>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input type="text" name ="Name" className="form-control"
          onChange={(e)=>setInputData({...inputData,Name:e.target.value})}/>
        </div>
        <div>
          <label htmlFor="quantity">No. of Products:</label>
          <input type="number" name ="Quantity" className="form-control"  onChange={(e)=>setInputData({...inputData,Quantity:e.target.value})}/>
        </div>
        <div>
          <label htmlFor="price">Total Price:</label>
          <input type="number" name ="Price" className="form-control"  onChange={(e)=>setInputData({...inputData,Price:e.target.value})}/>
          </div>
          <br/>
          <button type="submit" className="btn-addsubmit">Submit</button>
          </form>
        
      </div>
    </div>
    </>
  );
}

export default withRouter(PurchaseAdd);


