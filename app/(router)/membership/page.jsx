"use client"
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
    function A2RM(){
        const [subscriptionId,setSubscriptionId]=useState(null)

        /**
         * 
         * To create subscription ID
         * @param {*} planId
         */
        const createSubscription = async(planID) =>{
            axios.post("/api/create-subscription", JSON.stringify({
                plan_id:planID
            })).then(resp=> {
                console.log(resp.data)
                setSubscriptionId(resp.data.id)
            })
        }
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                    Monthly Pay ₹499 to subscribe to our premium services.
                </h1>
                <p className='text-gray-600 mb-6'>
                    ✅ Access to All Courses
                    ✅ Free Source Code
                    ✅ Free App Membership
                    ✅ Email and Instagram Dm support
                </p>
                <button
                    onClick={() => createSubscription('plan_PAs5zXb7kDR2h7')}
                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
                >
                    Pay ₹499
                </button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mt-8">
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                    Yearly Pay ₹3500 to subscribe to our premium services.
                </h1>
                <p className='text-gray-600 mb-6'>
                    ✅ Access to All Courses
                    ✅ Free Source Code
                    ✅ Free App Membership
                    ✅ Email and Instagram Dm support
                </p>
                <button
                    // onClick={loadRazorpay}
                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
                >
                    Pay ₹3500
                </button>
            </div>
        </div>

    );
    }

export default A2RM;