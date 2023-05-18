import React from 'react';
import axios from "axios";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import  "./Purchase.css";


const Purchase = () => {
    
    const [columns,setColumns]=useState([])
    const [records,setRecords]=useState([])
    //const history = useHistory();

    useEffect(()=>{
      axios.get('http://localhost:3030/pitems')
      .then(res =>{
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
    },[])
   
    return (
        <>
        <h1 className="PurchaseList">Purchase List</h1>

        <div className="Text-end"><Link to='/add' ><button className="btn-add"> Add(+) </button></Link></div>

        <div className="container mt-5">
           
            

            <table className="table">
                <thead>
                    <tr>
                    {columns.map((c,i)=>(
                         <th key={i}> {c} </th>
                    ))}
                    <th>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        records.map((d,i)=> (
                            <tr key={i}>
                                <td>{d.Id}</td>
                                <td>{d.Name}</td>
                                <td>{d.Quantity}</td>
                                <td>{d.Price}</td>
                                <td>
                                    <Link to={'/update'} className="btn btn-sm btn-success" ><button className="btn-update"> Update </button></Link>
                                    <Link  to='/delete' className="btn btn-sm ms-1 btn-danger" ><button className="btn-delete"> Delete </button></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
           
        </div>
        </>
    );
    // function handleSubmit(Id){
    //     const confirm = window.confirm("Do you want delete?");
    //     if(confirm){
    //         axios.delete("http://localhost:3030/pitems/"+Id)
    //         .then(_res => {
    //             alert("Record as deleted")
    //             history("/purchase")
    //         }).catch(err => console.log(err))
    //     }
    // }
};

export default Purchase;