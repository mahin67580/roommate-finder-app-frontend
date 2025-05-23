import React from 'react';
import { Slide } from 'react-awesome-reveal';

const BannerText = () => {
    return (
        <div>

            <div className="container mx-auto   ">
                <div className="flex flex-col lg:flex-row items-center justify-between  ">

                    <Slide direction="down">
                        <h2 className="text-center text-2xl md:text-6xl lg:text-8xl tracking-tight font-bold drop-shadow-lg backdrop-blur-2xl px-4 py-2 rounded-2xl">
                            The Best & Fastest <br /> Roommate Finder
                        </h2>
                    </Slide>
                    


                </div>
            </div>
        </div>

    );
};

export default BannerText;