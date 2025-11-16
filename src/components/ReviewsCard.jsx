import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const ReviewsCard = ({item}) => {
    const {userName, review, user_email, user_photoURL} = item;
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <FaQuoteLeft className="text-teal-600 text-3xl mb-3 opacity-70" />
      <p className="text-gray-700 leading-relaxed mb-6">
        {review}
      </p>
      <div className="border-t border-dotted border-gray-300 my-4"></div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10">
            <img src={user_photoURL} alt="" className='rounded-full' />
        </div>

        <div>
          <h4 className="text-teal-800 font-semibold">{userName}</h4>
          <p className="text-gray-500 text-sm">{user_email}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCard
