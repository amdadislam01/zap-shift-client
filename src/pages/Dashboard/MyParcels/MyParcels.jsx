import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAuth from '../../../hooks/UseAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyParcels = () => {
  const {user} = UseAuth();
  const axiosSecure = useAxiosSecure();
  const {data: parcels = []} = useQuery({
    queryKey: ['myParcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    }
  })
  return (
    <div>
      <h1>My Parcel : {parcels.length}</h1>
    </div>
  )
}

export default MyParcels
