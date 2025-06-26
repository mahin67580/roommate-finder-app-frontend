import React, { useEffect, useState } from 'react';



const images = [
    "https://www.georgefox.edu/bruin-blog/posts/2023/10/how-to-be-a-great-roommate/_assets-index/images/great-roommate-banner.jpg",
    "https://www.phillymag.com/wp-content/uploads/sites/3/2019/03/renting-with-roommates-trio-of-roommates-svetlkd-getty-images.jpg",
    "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://na.rdcpix.com/9bb74cef318af12a85a8017232f4668dw-c3306558496xd-w928_q80.jpg"

 


];

const Banner = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div>
            <div className='  place-items-center px-5 '>
                <div className="relative overflow-hidden mt-5 shadow-2xl w-11/12  rounded-2xl  ">
                    <div
                        className=" flex transition-transform duration-700 ease-in-out  "
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <img key={index} src={src} className="w-full flex-shrink-0 object-cover " alt={`slide-${index}`} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;