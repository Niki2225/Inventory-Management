import axios from "axios";
import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import "./Purchase.css"

function PurchaseEdit(){

     const {Id} = useParams();
     const [data,setData] = useState([])
     const history = useHistory();
     useEffect(()=>{
         axios.get("http://localhost:3030/pitems/"+Id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
     },[Id])
    function handleSubmit(event){
        event.preventDefault()
        axios.put(_res => {
            alert("Data updated successfully!");
            history.push("/")
        })
     }
     return(
        <div>
             <div className="d-flex w-100 vh-100 justify-content-center align item-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Id</label>
          <input type="text" disabled name ="Id" 
          value={data.Id} 
          className="form-control"/>
        </div>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input type="text" name ="Name" 
          value={data.Name} 
          className="form-control"
          onChange ={e => setData({...data,Name:e.target.value})}/> 
        </div>
        <div>
          <label htmlFor="quantity">No. of Products:</label>
          <input type="number" name ="Quantity"
          value={data.Quantity} 
           className="form-control"
          onChange ={e => setData({...data,Quantity:e.target.value})}/> 
        </div>
        <div>
          <label htmlFor="price">Total Price:</label>
          <input type="number" name ="Price"
          value={data.Price} 
           className="form-control"
          onChange ={e => setData({...data,Price:e.target.value})}/>
          </div>
          <br/>
          <button className="btn btn-info">Update</button>
          </form>
        
      </div>
    </div>
        </div>
     )
}
export default PurchaseEdit;

