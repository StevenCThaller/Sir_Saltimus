import React from 'react'
import trash from '../imgs/trash.png';

const BigCard = props => {
    const { stream, user, deleteStream } = props;

    return (
        <div className="big-card schedule-card" style={{ backgroundImage: `url("${stream.game.imageUrl}")`}}>
            <div className="blur">
                <h3 className="riffic stream-info big-card-title">{stream.streamTitle} { user && user.name === "sir_saltimus" ? <span className="delete-icon" onClick={() => deleteStream(stream) }>&#10006;</span> : '' }</h3>
                <div className="stream-info">
                    <h3 className="riffic">
                        <span className="riffic bluer">Playing:</span>&nbsp;
                        {stream.game.title}
                        {
                            stream.game.purchaseLink ?
                            <span> (<a href={stream.game.purchaseLink} target="_none">Buy</a>)</span>
                            :
                            ''
                        }
                    </h3>
                    <h3 className="riffic"><span className="riffic bluer">Start Time:</span> {new Date(stream.startTime).toLocaleString('en-us', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})} PST</h3>
                </div>
            </div>
        </div>
    )
}

export default BigCard
