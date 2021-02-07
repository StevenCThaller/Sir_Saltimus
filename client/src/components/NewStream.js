import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap'



const NewStream = props => {
    const { user, isAuthenticated, getSchedule, closeForm } = props;
    const [show, setShow] = useState(false);
    const [stream, setStream] = useState({
        StreamTitle: "",
        GameId: "",
        StartTime: new Date()
    })



    const [games, setGames] = useState([]);
    // const [stream, setStream] = useReducer(reducer, {
    //     StreamTitle: "",
    //     GameId: "",
    //     StartTime: new Date()
    // });
    const [game, setGame] = useState({
        Title: "",
        ShortenedTitle: "",
        ImageUrl: "",
        PurchaseLink: ""
    });

    useEffect(() => {
        getGames();
    }, [])

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const getGames = () => {
        axios.get('https://localhost:5001/api/games')
            .then(response => {
                setGames(response.data);
                console.log(response.data[0]);
                setStream({
                    ...stream,
                    GameId: `${response.data[0].gameId}`
                })
                // console.log(response.data);
            })
            .catch(err => console.log(err));
    }

    const streamChange = e => {
        if(e.target.name === "GameId" && e.target.value === "newgame"){
            handleOpen();
        } else {   
            setStream({
                ...stream,
                [e.target.name]: e.target.value
            })
        }
    }

    const gameChange = e => {
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
    }

    const streamSubmitHandler = e => {
        e.preventDefault();
        // stream.StartTime = new Date(stream.StartTime).toUTCString();
        // console.log(stream.StartTime);
        axios.post('https://localhost:5001/api/stream', { ...stream, StartTime: new Date(stream.StartTime).toISOString() })
            .then(response => {
                setStream({
                    StreamTitle: "",
                    GameId: "",
                    StartTime: new Date()
                });
                getSchedule();
                closeForm();
            })
            .catch(err => console.log(err));
    }

    const gameSubmitHandler = () => {
        axios.post('https://localhost:5001/api/game', game)
            .then(response => {
                handleClose();
                getGames();
            })
            .catch(err => console.log(err));
        
    }

    return (
        <>
        <form className="new-stream" onSubmit={streamSubmitHandler} autoComplete="off">
            <div className="row form-group flex-row align-center">
                <label className="col-12 col-sm-4 form-label" htmlFor="StreamTitle">Stream Title: </label>
                <input className="form-control col-12 col-sm-6" type="text" name="StreamTitle" onChange={streamChange} value={stream.StreamTitle}/>
            </div>
            <div className="row form-group flex-row align-center">
                <label className="col-12 col-sm-4 form-label" htmlFor="GameId">Game: </label>
                    <select className="col-12 col-sm-6 form-control" name="GameId" onChange={streamChange} value={stream.GameId}>
                        {
                            games.map((game, i) => {
                                return <option key={i} value={game.gameId}>{game.title}</option>
                            })
                        }
                        <option value="newgame">Add New Game</option>
                    </select>
            </div>
            <div className="row form-group flex-row align-center">
                <label className="col-12 col-sm-4 form-label" htmlFor="StartTime">Starting Time: </label>
                <input className="col-12 col-sm-6 form-control" type="datetime-local" name="StartTime" onChange={streamChange} value={stream.StartTime}/>
            </div>
            <div className="row form-group flex-row align-center">
                <input className="submit-button col-4 offset-4" type="submit" value="Submit"/>
            </div>
        </form>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="flex-row center align-center">
                    <label className="col-4 text-right" htmlFor="Title">Game Title: </label>
                    <input className="col-6 form-control" type="text" name="Title" onChange={gameChange}/>
                </div>
                <div className="flex-row center align-center">
                    <label className="col-4 text-right" htmlFor="ShortenedTitle">Shorthand:  </label>
                    <input className="col-6 form-control" type="text" name="ShortenedTitle" onChange={gameChange}/>
                </div>
                <div className="flex-row center align-center">
                    <label className="col-4 text-right" htmlFor="ImageUrl">Image Url: </label>
                    <input className="col-6 form-control" type="text" name="ImageUrl" onChange={gameChange}/>
                </div>
                <div className="flex-row center align-center">
                    <label className="col-4 text-right" htmlFor="PurchaseLink">Purchase URL:  </label>
                    <input className="col-6 form-control" type="text" name="PurchaseLink" onChange={gameChange}/>
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
