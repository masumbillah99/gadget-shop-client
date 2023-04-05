import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();

    return (
        <div>
            <h2>This are my friends: {friends.length}</h2>
            <div>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;