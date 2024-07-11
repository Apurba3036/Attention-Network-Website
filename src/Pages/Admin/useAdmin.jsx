import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const useAdmin = () => {
    const { user,loading } = useContext(AuthContext);
    // const navigate = useNavigate();

    const { data: isAdmin, isLoading: isAdminLoading, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email ],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const token = localStorage.getItem('Access_token');
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            const data = await res.json();
            return data.admin;  // Note the change here to return data.admin
        },
      
    });

    return [isAdmin, isAdminLoading, refetch];
};

export default useAdmin;
