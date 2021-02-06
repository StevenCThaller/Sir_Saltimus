import React from 'react'

const SmallCard = props => {
    const { stream } = props

    return (
        <div class="schedule-card-container-small">
            <div className="card-bg" style={{ backgroundImage: `url("${stream.game.imageUrl}")`}}></div>
            <div className="center schedule-card-info-small">
                <h2 className="riffic bluer card-title">{new Date(stream.startTime).toLocaleString('en-us', { weekday: 'short'}) }: <span class="riffic white">{ stream.game.shortenedTitle ? stream.game.shortenedTitle : stream.game.title}</span> </h2>
            </div>
        </div>
    )
}

export default SmallCard
