import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import NewStream from './NewStream';
import axios from 'axios';
import NextStream from './NextStream';
// import NewGame from './NewGame';

const Schedule = () => {
    const { user, isAuthenticated } = useAuth0();
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/api/stream')
            .then(response => setStreams(response.data))
            .catch(err => console.log(err));
    }, [])



    return (
        <main>
            {
                isAuthenticated && user.name === "sir_saltimus" ?
                <NewStream user={user} isAuthenticated={isAuthenticated} />
                :
                ''
            }
            {
                streams[0] ?
                <NextStream stream={streams[0]}/>
                : 
                ''
            }
        </main>
    )
}

export default Schedule
