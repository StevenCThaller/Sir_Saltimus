import React from 'react'

const SmallCard = props => {
    const { stream, streamClick, index } = props;

    return (
        <div onClick={() => streamClick(index) } className="small-card schedule-card" style={{ backgroundImage: `url("${stream.game.imageUrl}")`}}>
            <div className="blur">
                <h3 className="stream-info riffic bluer card-title">{new Date(stream.startTime).toLocaleString('en-us', { weekday: 'short'}) }: <span className="riffic white">{ stream.game.shortenedTitle ? stream.game.shortenedTitle : stream.game.title}</span> <span className="riffic bluer">@</span>{new Date(stream.startTime).toLocaleString('en-us', { hour: 'numeric'}) }</h3>
            </div>
        </div>
    )
}

export default SmallCard
