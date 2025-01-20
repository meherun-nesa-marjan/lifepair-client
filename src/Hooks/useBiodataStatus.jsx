import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useBiodataStatus = () => {
  const { user } = useContext(AuthContext);

  const { data: biodataStatus = 'normal', isLoading } = useQuery({
    queryKey: ['biodataStatus', user?.email],
    queryFn: async () => {
      if (!user?.email) return 'normal'; 
      const res = await axios.get(`http://localhost:5000/biodataStatus/${user.email}`);
      return res.data.status;
    },
    enabled: !!user?.email, 
  });

  return { biodataStatus, isLoading };
};

export default useBiodataStatus;
