import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';
import { Tooltip as ReactTooltip } from "react-tooltip";
 
 
 

const Details = () => {
    const post = useLoaderData()
    const { user } = use(AuthContext)
    const [count, setCount] = useState(post?.likes || 0);
    const [showcontact, setshowcontact] = useState(false)
    const { _id, title, rent, location, availability, contact, description, lifestyle, roomType, email } = post;


    const isOwner = user?.email === email;

    const handleLike = (id) => {

        if (isOwner) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can't like your own post!",
            });
            return;
        }

        const newCount = count + 1;
        setCount(newCount);

        setshowcontact(true)


        fetch(`https://roommateserver-production.up.railway.app/roommates/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ likes: newCount }),
        }).then(res => res.json()).then(data => {
            // console.log("data from serverDB", data);
            if (data.acknowledged) {


                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You Liked it",
                    showConfirmButton: false,
                    timer: 1500
                });



            }
        })



    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="  m-6 text-center  p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300 w-11/12 mx-auto">
                <p className='text-green-500 font-bold mb-4'><span className='text-2xl'>{count}</span> people interested in this person</p>
                <h2 className="text-xl font-bold mb-4  ">{title}</h2>
                <p className="  mb-4"><strong>Location:</strong> {location}</p>
                <p className=" mb-4"><strong>Rent:</strong> $ {rent}</p>
                <p className=" mb-4"><strong>availability:</strong> {availability}</p>

                <p className=" mb-4"><strong>description:</strong> {description}</p>
                <p className=" mb-4"><strong>lifestyle:</strong> {lifestyle}</p>
                <p className=" mb-4"><strong>roomType:</strong> {roomType}</p>
                <p className=" mb-4"><strong>email:</strong> {email}</p>
                <button onClick={() => handleLike(_id)} className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-4" data-tooltip-id="my-tooltip-1">Like</button>
                {
                    showcontact && (<p className="text-gray-600  "><strong>contact:</strong> {contact}</p>)
                }
            </div>
 
    

            <Footer></Footer>
            <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                content="Press Like to Get Contact"
            />
        </div>
    );
};

export default Details;