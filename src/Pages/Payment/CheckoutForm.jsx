import { useContext, useEffect, useState } from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import { AuthContext } from '../../Providers/AuthProvider';
const CheckoutForm = ({totalprice, bookings}) => {
    const stripe=useStripe();
    const elements=useElements();
    const [cardError,setCarderror]=useState("")
    const [processing,setProcessing]=useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const [transactionid,settransactionid]=useState('')
    const {user}=useContext(AuthContext);

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
     if(totalprice>0){
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: totalprice }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
     }
       
    }, []);


    const handleSubmit=async(event)=>{
          event.preventDefault();

          if(!stripe || !elements){
            return
          }


          const card=elements.getElement(CardElement);
          if(card===null){
            return;
          }
          console.log(card);
          const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card,
            billing_details: {
                email: user?.email || "anonymoususer",
                name: user?.displayName || "meow",
              },
          })

          if(error){
            console.log(error)
            setCarderror(error.message)
          }
          else{
            setCarderror('')
            console.log("payment method:",paymentMethod);
          }

          setProcessing(true)


        const {paymentIntent ,error:confirmederror } = await stripe.confirmCardPayment(
          clientSecret, {
        payment_method: {
         card: card,
        billing_details: {
        name: "konika"
        ,
      },
    },
  })

          if(confirmederror){
            console.log(confirmederror)
          }
        else{
        

            console.log(paymentIntent)
        }
         setProcessing(false)
        if(paymentIntent.status==="succeeded"){
            settransactionid(paymentIntent.id);
            const payment={
              email: user?.email,
              transactionid : paymentIntent.id,
              totalprice,
              quantity: bookings.length,
              bookingsitems: bookings.map(item=>item._id),
              serviceitems: bookings.map(item=>item.service_id),
              itemsNames: bookings.map(item=>item.service),
              date: new Date(),
              service_date: bookings.map(item=>item.date),
              order_status: "Payment done"




            }
            fetch(`http://localhost:5000/payments`,{
              method :'POST',
              headers:{
                  'content-type':'application/json'
              },
              body: JSON.stringify(payment)
           })
           .then(res=>res.json())
           .then(data=>{
              console.log(data.result);
           })
  
        }



    }
    return (
        <div className='bg-slate-100 rounded-lg w-full p-2'>
            <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-warning mt-3' type="submit" disabled={!stripe || !clientSecret ||processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600'>{cardError}</p>}
      {transactionid && <p className='text-green-500'>Transaction complete successfully {transactionid}</p>}
        </div>

    );
};

export default CheckoutForm;