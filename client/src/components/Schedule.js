import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import NewStream from './NewStream';
import axios from 'axios';
import SmallCard from './SmallCard';
import BigCard from './BigCard';
import plus from '../imgs/plus.png';
import minus from '../imgs/minus.png';
// import NewGame from './NewGame';

const Schedule = () => {
    const { user, isAuthenticated } = useAuth0();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600 ? true : false);
    const [streams, setStreams] = useState([]);
    const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        getSchedule();
        console.log(user);
        console.log(isAuthenticated);
    }, [])

    const getSchedule = () => {
        axios.get('https://localhost:5001/api/stream')
            .then(response => {
                const tempStreams = [];
                for(var stream of response.data) {
                    tempStreams.push({ stream: stream, isActive: false});
                }
                if(tempStreams.length > 0) {
                    tempStreams[0].isActive = true;
                }
                setStreams(tempStreams);
            })
            .catch(err => console.log(err));
    }

    const streamClickMobile = i => {
        const tempStreams = [...streams];

        for(let stream of tempStreams){
            stream.isActive = false;
        }
        const stream = tempStreams[i];
        console.log(tempStreams);
        stream.isActive = true;
        tempStreams[i] = stream;
        setStreams(tempStreams);
    }

    const streamClick = (i) => {
        const tempStreams = [...streams];
        let temp = tempStreams[i];
        tempStreams[i] = tempStreams[0];
        tempStreams[0] = temp;

        for(let j = 1; j < tempStreams.length-1; j++){
            for(let k = 1; k < tempStreams.length-1; k++){
                if(tempStreams[j].stream.startTime > tempStreams[j+1].stream.startTime){
                    let temp = tempStreams[j];
                    tempStreams[j] = tempStreams[j+1];
                    tempStreams[j+1] = temp;
                }
            }
        }
        setStreams(tempStreams);
    }

    const deleteStream = stream => {
        if(window.confirm("Are you sure you want to delete this stream?")) {
            axios.delete(`https://localhost:5001/api/stream/${stream.streamId}`)
            .then(response => {
                getSchedule();
            })
            .catch(err => console.log(err));
        }
    }

    const closeForm = () => {
        setShowForm(false);
    }



    return (
        <main>
            <h2 className="page-title">
                When is Salt Strimmin'? 
                {
                    isAuthenticated && user.name === "sir_saltimus" ? 
                        showForm ? 
                            <img className="plus-minus" src={minus} onClick={() => setShowForm(!showForm) }/> 
                            : 
                            <img className="plus-minus" src={plus} onClick={() => setShowForm(!showForm) }/> 
                        : 
                        '' 
                }
                </h2>
            {
                showForm ?
                <NewStream closeForm={closeForm} getSchedule={getSchedule} user={user} isAuthenticated={isAuthenticated} />
                :
                ''
            }
            {
                streams.length > 0 ?
                <div className="schedule">
                    {
                        !isMobile && streams.length > 0 ? 
                        <BigCard stream={streams[0].stream} user={user} deleteStream={deleteStream}/>
                        :
                        ''
                    }
                    <div className="schedule-stack">
                        {
                            streams.map((stream, i) => {
                                return isMobile ?
                                    stream.isActive ?
                                        <BigCard key={i} stream={stream.stream} user={user} deleteStream={deleteStream}/>
                                        :
                                        <SmallCard streamClick={streamClickMobile} index={i} key={i} stream={stream.stream}/>
                                :
                                i > 0 ?
                                    <SmallCard streamClick={streamClick} index={i} key={i} stream={stream.stream}/>
                                    :
                                    ''
                            })
                        }
                    </div>
                </div>
                : 
                ''
            }
        </main>
    )
}

export default Schedule
