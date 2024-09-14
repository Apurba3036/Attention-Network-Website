import React from 'react';

const PayemntTable = ({payment}) => {
    console.log(payment)
    const {_id,transactionid,email,totalprice,itemsNames,date,order_status}=payment;
    
    return (

      <tr>  
       
        <td>
          <div className="flex items-center gap-3">
            
            <div>
              <div className="font-bold">{transactionid}</div>
              <div className="text-sm opacity-50">Bangladesh</div>
            </div>
          </div>
        </td>
        <td>
        {totalprice}
       </td>
        
       <td>
    {itemsNames.map((itemname, index) => (
      <div key={index}>
        {itemname}
      </div>
    ))}
  </td>
       
        <td>{email}</td>
        <td>{date}</td>
        <td>{order_status}</td>
        
      </tr>
    )
   
};

export default PayemntTable;