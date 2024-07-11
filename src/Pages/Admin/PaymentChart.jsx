import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PaymentChart = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/payments'); // Assuming your API endpoint is correctly configured
        setPaymentData(response.data); // Set payment data from API response
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  // Aggregate payments by unique service names
  const aggregatePayments = () => {
    const serviceMap = {};

    paymentData.forEach(payment => {
      payment.itemsNames.forEach(serviceName => {
        if (!serviceMap[serviceName]) {
          serviceMap[serviceName] = {
            serviceName: serviceName,
            totalPayment: payment.totalprice,
          };
        } else {
          serviceMap[serviceName].totalPayment += payment.totalprice;
        }
      });
    });

    return Object.values(serviceMap);
  };

  // Example data structure for Recharts
  const chartData = aggregatePayments();

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="serviceName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalPayment" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentChart;
