import React from 'react';
import CountUp from 'react-countup';
import { FaUserFriends } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { HiPaperAirplane } from 'react-icons/hi';
import { FaListAlt } from 'react-icons/fa';


const Countuoany = () => {
    return (
        <div>
            <div >
                <div className='mt-15'>
                    <h1 className=' text-center text-4xl  mt-5 font-semibold '>We Provide Best Roommates</h1>
                    <p className='text-center hidden lg:block'>Our platform Provides You The Best of the Best Place For You To Rent </p>
                </div>
                <div className='flex mt-5 flex-col lg:flex-row p-3  justify-center gap-14'>
                    <div className=' shadow-2xl  place-items-center p-8 bg-[#0F0F0F0D] space-y-1'>
                        {/* <img src={sucess} alt="" /> */}
                          <FaUserFriends className="text-blue-600 text-3xl" />
                        <div className='flex items-center text-2xl  font-bold'>
                            <CountUp end={199} duration={33} separator="," />
                            <p>+</p>
                        </div>

                        <p>Total Roommates Matched</p>
                    </div>

                    <div className='shadow-2xl place-items-center p-8 bg-[#0F0F0F0D] space-y-1'>
                        {/* <img src={star} alt="" /> */}
                       <MdVerified className="text-green-500 text-3xl" />
                        <div className='flex items-center text-2xl  font-bold'>
                            <CountUp end={467} duration={15} separator="," />
                            <p>+</p>
                        </div>

                        <p>Verified Reviews</p>
                    </div>

                    <div className='shadow-2xl place-items-center p-8 bg-[#0F0F0F0D] space-y-1'>
                        {/* <img src={im2} alt="" /> */}
                       <HiPaperAirplane className="text-purple-500 text-3xl rotate-45" />
                        <div className='flex items-center text-2xl  font-bold'>
                            <CountUp end={1900} duration={15} separator="," />
                            <p>+</p>
                        </div>

                        <p>Roommate Requests Sent</p>
                    </div>

                    <div className='shadow-2xl place-items-center p-8 bg-[#0F0F0F0D] space-y-1'>
                        {/* <img src={staf} alt="" /> */}
                           <FaListAlt className="text-orange-500 text-3xl" />
                        <div className='flex items-center text-2xl  font-bold'>
                            <CountUp end={300} duration={18} separator="," />
                            <p>+</p>
                        </div>

                        <p>Active Listings</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Countuoany;