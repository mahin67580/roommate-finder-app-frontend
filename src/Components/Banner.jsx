import React, { useEffect, useState } from 'react';

const images = [
    {
        url: "https://www.georgefox.edu/bruin-blog/posts/2023/10/how-to-be-a-great-roommate/_assets-index/images/great-roommate-banner.jpg",
        text: "Find Your Perfect Roommate Match",
        subtext: "Compatibility beyond just location"
    },
    {
        url: "https://www.phillymag.com/wp-content/uploads/sites/3/2019/03/renting-with-roommates-trio-of-roommates-svetlkd-getty-images.jpg",
        text: "Shared Living Made Easy",
        subtext: "Connect with like-minded roommates"
    },
    {
        url: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Your Next Home Awaits",
        subtext: "Discover your ideal living situation"
    },
    {
        url: "https://na.rdcpix.com/9bb74cef318af12a85a8017232f4668dw-c3306558496xd-w928_q80.jpg",
        text: "Safe & Verified Connections",
        subtext: "Trusted roommate matching platform"
    }
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Increased interval for better readability

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[70vh] max-h-[700px] min-h-[400px] overflow-hidden rounded-xl">
            <div 
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-full">
                        <img 
                            src={image.url} 
                            className="w-full h-full object-cover brightness-75"
                            alt={`slide-${index}`} 
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <div className="  backdrop-blur-2xl   p-6 rounded-xl max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg ">
                                    {image.text}
                                </h2>
                                <p className="text-xl md:text-2xl text-white opacity-90 drop-shadow-md">
                                    {image.subtext}
                                </p>
                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Navigation dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;