import React from 'react'

const NextStream = props => {
    const { stream } = props
    return (
        <>
        <div id="next-stream" className="schedule-card-container">
            <div className="card-bg" style={{ backgroundImage: `url("${stream.game.imageUrl}")`}}></div>
            <div className="card-info">
                <h2 className="card-title riffic">{stream.streamTitle}</h2>
                <div className="card-title stream-data">
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

        </>
    )
}

export default NextStream
