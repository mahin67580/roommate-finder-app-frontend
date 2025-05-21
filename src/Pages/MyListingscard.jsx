import React from 'react';

const MyListingscard = ({ useraddedpost }) => {
    const { _id, title, location, rent } = useraddedpost;

    return (
        <tr className="text-center border-b hover:bg-gray-50">
            <td className="py-2 px-4">{title}</td>
            <td className="py-2 px-4">{location}</td>
            <td className="py-2 px-4">৳{rent}</td>
            <td className="py-2 px-4">
                <button
                    // onClick={handleUpdate}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2"
                >
                    Update
                </button>
                <button
                    // onClick={handleDelete}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyListingscard;