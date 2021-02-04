import React from 'react'
import { TwitchPlayer } from 'react-twitch-embed';

const Home = props => {
    return (
        <main>
            <TwitchPlayer
                channel="sir_saltimus"
                collection="T9zkvG9oYBaryw"
                theme="dark"
                muted
            />
        </main>
    )
}

export default Home
