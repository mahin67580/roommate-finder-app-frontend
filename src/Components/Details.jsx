import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const post = useLoaderData()
    console.log(post);
    return (
        <div>
            <h1>details</h1>
        </div>
    );
};

export default Details;