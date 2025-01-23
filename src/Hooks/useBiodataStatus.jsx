
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useBiodataStatus = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: biodataStatus = 'normal', isLoading } = useQuery({
    queryKey: ['biodataStatus', user?.email],
    queryFn: async () => {
      if (!user?.email) return 'normal'; 
      const res = await axiosSecure.get(`/biodataStatus/${user.email}`);
      return res.data.status;
    },
    enabled: !!user?.email, 
  });

  return { biodataStatus, isLoading };
};

export default useBiodataStatus;
