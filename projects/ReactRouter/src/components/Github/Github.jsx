import { useState } from 'react';
import { React, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
function Github() {

    const [data, setData] = useState()

    useEffect(() => {
        const myFunc = async () => {
            try {
                const response = await fetch("https://api.github.com/users/iakanksha2908");
                const result = await response.json();
                
                setData(result);
                console.log(result);
            } catch (error) {
                console.error("Error fetching the GitHub user data:", error);
            }
        };

        myFunc();
    }, []);

    return (

        <div className='bg-gray-700 flexDirection-row items-denter '>
            <div className='ml-20'>React followers: {!data ? "" : data.followers}</div>
            <div> {!data ? "" : <img src={data.avatar_url} width={200} rounded-full></img>} </div>

        </div>
    )
}

export default Github;
