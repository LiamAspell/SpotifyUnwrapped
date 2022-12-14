import React, { Component } from 'react';
import { useEffect, useState } from "react";
import '../App.css';
import axios from 'axios';
import SpotifyLogo from '../resources/Spotify.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import ArtistModal from "../components/ArtistModal";
import TrackModal from "../components/TrackModal";
import Navbar from "../components/ColorSchemesExample";
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { BiHeadphone } from "react-icons/bi";

export const Tracks = () => {
    const CLIENT_ID = "89dba4db4d2642e2ac2e0f4d5dc0d457"
    const REDIRECT_URI = "http://localhost:3000/Tracks"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "user-top-read, user-modify-playback-state, streaming, user-read-email, user-read-private, user-library-read, user-library-modify, user-read-playback-state, user-modify-playback-state"
    const [token, setToken] = useState("")
    const [artists, setArtists] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])

    const ColoredLine = ({ color }) => (
        <hr style={{
            color: color,
            backgroundColor: color,
            height: 1
        }} />
    );

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.location.reload();
    }

    const makePlaylist = async (e) => {
        console.log("THIS A TEST")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=40&offset=5", {       //https://api.spotify.com/v1/search
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
            }
        })
        console.log(data.items)
        setArtists(data.items)
    }

    function addToQueue(trackName) {
        console.log("Adding Track to Queue")
        console.log({ trackName })
    }

    const renderArtists = () => {
        return artists.map(track => (
            <div key={track.id}>
                <ColoredLine color='black' />
                {track.album.artists[0].name} - {track.name}<br />
                <img width={"400px"} src={track.album.images[0].url} alt="123" />
                <form action={track.external_urls.spotify}>
                    <Button variant="secondary" type="submit">See on Spotify</Button>
                    <TrackModal artistName={track.name} releaseDate={track.album.release_date} albumName={track.album.name} artist={track.album.artists[0].name} />
                </form>
                <Button variant="dark" href='/player' onClick={() => addToQueue(track.name)}> Listen on Player <BiHeadphone /></Button>
                
            </div>
        ))
    }

    return (
        <div className='App'>
            <header className="App-header">
                <h1>Find Your Favourite Tracks</h1>
                <img src={SpotifyLogo} width="30%" />
                {token ?
                    <div>
                        <form onSubmit={searchArtists}>
                            <Button variant="primary" type={"submit"} style={{ color: 'white' }}>Find Your Most Played Tracks</Button>
                            <br />
                            <Button variant="success" onClick={makePlaylist} style={{ color: 'white' }}>Create Playlist with these Tracks</Button>
                            <div style={{
                                width: "60%",
                                margin: "auto"
                            }}>
                                <ColoredLine color='black' />
                                <p>By hitting the button above, The Spotify API is queried to return user data, in the form of the top tracks streamed on the spotify platform by the user. Clicking the 'More Info' button, will display the track analytics, and selecting the 'Go to Player' button, will take you to the player page, where the track will play, and lyrics will be displayed. </p>
                                <ColoredLine color='black' />
                            </div>
                        </form>
                    </div>
                    : <div style={{ width: "30%" }}>
                        <h2>How does this work?</h2>
                        <p>When authenticated with Spotify, hit the search button! This will bring up a list of the accounts most played artists / tracks, along with links to play music with a built in player which implements to Spotify Api Playback Endpoint </p>
                    </div>
                }

                {!token ?
                    <Button variant="success" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Click To Login on with Spotify</Button>
                    : <Button variant="danger" onClick={logout} style={{ color: 'white' }}>Click to Logout</Button>
                }
                {renderArtists()}
            </header>
        </div>
    );
}

export default Tracks