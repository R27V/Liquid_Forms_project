import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';

const ManageAssets = () => {
 
    const [assetList, setAssetList] = useState([]);
    
    

     const getDataFromBackend = async() => {
        const response = await fetch('http://localhost:5000/user/getall')
         const data = await response.json()
         console.log(data);
         setAssetList(data);
     };

     const deleteAsset = async(id) =>{
        console.log(id);
        const response = await fetch('http://localhost:5000/user/delete/'+id, {
            method : 'DELETE'
        });
        console.log(response.status);
        getDataFromBackend();
        toast.success('Asset Deleted 😎')
     } 

    
     useEffect(() => {
        getDataFromBackend();
     }, []);

    const displayAssets = () => {    
        return <table className="table table-striped table-light">
            <thead>
                <tr>
                
                    <th>FILENAME</th>
                    <th>FILE</th>
                    <th>USER</th>
                
                </tr>
            </thead>
            <tbody>
                {
                    assetList.map((asset) => (
                        <tr>
                            
                            <td>{asset.filename}</td>
                            <td>{asset.file}</td>
                            <td>{asset.user}</td>
                            <td>{new Date(asset.createdAt).toLocaleDateString()}</td>
                        
                            <td>
                                <button className='btn btn-danger' onClick={() => {deleteAsset(asset._id)}}>
                                  <i className= 'fas fa-trash' />
                                </button>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    }
    return (
        <div className='container-fluid'>
            <h1 className='text-center'>Asset Manager</h1>
            <hr/>
            
            <div className="row">
                <div className="col-md">
                 {displayAssets()}
                </div>
                {/* {showForm ?
                <div className="col-md">
                    <UpdateUser updateFormdata={updateFormdata}
                     refreshData = {getDataFromBackend} 
                     setShowForm = {setShowForm} />
                     </div>
                     :
                     ''
                     } */}
            </div>

        </div>
    )
};

export default ManageAssets ;