import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap'

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const NewStream = props => {
    const { user, isAuthenticated } = props;
    const [show, setShow] = useState(false);

    const [newGame, setNewGame] = useState(false);
    const [games, setGames] = useState([]);
    const [stream, setStream] = useReducer(reducer, {
        StreamTitle: "",
        GameId: "",
        StartTime: new Date()
    });
    const [game, setGame] = useReducer(reducer, {
        Title: "",
        ShortenedTitle: "",
        ImageUrl: "",
        PurchaseLink: ""
    });

    useEffect(() => {
        axios.get('https://localhost:5001/api/games')
            .then(response => {
                setGames(response.data);
                setStream({
                    ...stream,
                    GameId: response.data[0].gameId
                })
                // console.log(response.data);
            })
            .catch(err => console.log(err));
    },[])

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);


    const streamChange = e => {
        const { name, value } = e.target;
        setStream({
            type: name,
            payload: value
        })
    }

    const gameChange = e => {
        const { name, value } = e.target;
        setGame({
            type: name,
            payload: value
        })
    }

    const streamSubmitHandler = e => {
        e.preventDefault();
        console.log(stream.StartTime);
        // var day = stream.StartTime.getDate();       // yields date
        // var month = stream.StartTime.getMonth() + 1;    // yields month (add one as '.getMonth()' is zero indexed)
        // var year = stream.StartTime.getFullYear();  // yields year
        // var hour = stream.StartTime.getHours();     // yields hours 
        // var minute = stream.StartTime.getMinutes(); // yields minutes
        // var second = stream.StartTime.getSeconds(); // yields seconds

        // // After this construct a string with the above results as below
        // var time = day + "/" + month + "/" + year + " " + hour + ':' + minute + ':' + second;
        // stream.StartTime = new Date(stream.StartTime);
        // stream.StartTime = time;
        axios.post('https://localhost:5001/api/stream', stream)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    const gameSubmitHandler = () => {
        axios.post('https://localhost:5001/api/game', game)
            .then(response => handleClose())
            .catch(err => console.log(err));
        
    }

    return (
        <>
        <form onSubmit={streamSubmitHandler}>
            <div className="flex-row space-between">
                <label htmlFor="StreamTitle">Stream Title: </label>
                <input type="text" name="StreamTitle" onChange={streamChange}/>
            </div>
            <div className="flex-row space-between align-center">
                <label htmlFor="GameId">Game: </label>
                    {
                        games.length > 0 ?
                        <>
                        <select name="GameId" onChange={streamChange}>
                            <option value="">test</option>
                            {
                                games.map((game, i) => {
                                    return <option key={i} value={game.gameId}>{game.title}</option>
                                })
                            }
                        </select>
                        <p className="m-b-0">-- OR --</p>
                        </>
                        :
                        ''
                    }
                    <input type="button" onClick={handleOpen} value="Add Game"/>
            </div>
            <div className="flex-row space-between align-center">
                <label htmlFor="StartTime">Starting Time: </label>
                <input type="datetime-local" name="StartTime" onChange={streamChange}/>
            </div>
            <input type="submit" value="Submit"/>
        </form>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="flex-row">
                    <label htmlFor="Title">Game Title: </label>
                    <input type="text" name="Title" onChange={gameChange}/>
                </div>
                <div className="flex-row">
                    <label htmlFor="ShortenedTitle">Shorthand:  </label>
                    <input type="text" name="ShortenedTitle" onChange={gameChange}/>
                </div>
                <div className="flex-row">
                    <label htmlFor="ImageUrl">Image Url: </label>
                    <input type="text" name="ImageUrl" onChange={gameChange}/>
                </div>
                <div className="flex-row">
                    <label htmlFor="PurchaseLink">Purchase URL:  </label>
                    <input type="text" name="PurchaseLink" onChange={gameChange}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={gameSubmitHandler}>Submit</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default NewStream
