import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ApprovedRiders = () => {
    const axiosSecure = useAxiosSecure();
    const {data: parcels = []} = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('')
            return res.data;
        }
    })
    return (
        <div>
            <h1 className='text-4xl'>Approved Riders: {parcels.length}</h1>
        </div>
    );
};

export default ApprovedRiders;