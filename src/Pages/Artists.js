import React, { Component } from 'react';
import { useEffect, useState } from "react";
import '../App.css';
import axios from 'axios';
import SpotifyLogo from '../resources/Spotify.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import ArtistModal from "../components/ArtistModal";
import Navbar from "../components/ColorSchemesExample";


export const Artists = () => {
    const CLIENT_ID = "89dba4db4d2642e2ac2e0f4d5dc0d457"
    const REDIRECT_URI = "http://localhost:3000/Artists"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "user-top-read"
    const [token, setToken] = useState("")
    const [artists, setArtists] = useState([])
    const dummyToken = "BQBokzs7H3HhmkTg5x1BFXcRPhOlrsj8Y9bXL9Dckuka5Sssq7Oz3w8vEf-h05my4RYiLb61N6OTgy026IuNkOZ7aTZYe3YzfvvIqCyQ8-gdyctrCcYdmhdsGXdRVl1SHqImFSAO4RdEfrEfJLWfgDDh24mlQFifuEwjfMeYENwc05iyR27rq9D1DypuSqYu4t2unTD1"

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
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1
            }}
        />
    );

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.location.reload();
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=30&offset=5", {       //https://api.spotify.com/v1/search
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
            }
        })
        console.log(data.items)
        setArtists(data.items)

    }


    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                <ColoredLine color='black' />
                {artist.name}<br />

                <img width={"400px"} src={artist.images[0].url} alt="123" />
                <form action={artist.external_urls.spotify}>
                    <Button variant="secondary" type="submit">See on Spotify</Button>
                    <ArtistModal artistName={artist.name} artistFollowers={artist.followers.total} artistPopularity={artist.popularity} artistGenre={artist.genres[0]} />
                </form>

                <Button variant="dark" href='/player'>Go to Player</Button>

            </div>
        ))
    }

    return (
        <div className='App'>
            {/* <Navbar /> */}
            <header className="App-header">

                <h1>Find Your Favourite Artists</h1>
                <img src={SpotifyLogo} width="30%" />

                {token ?
                    <form onSubmit={searchArtists}>
                        <Button variant="success" type={"submit"} style={{ color: 'white' }}>Find Your Most Played Artists</Button>

                        <div style={{
                            width: "60%",
                            margin: "auto"
                        }}>

                            <ColoredLine color='black' />
                            <p>By hitting the button above, The Spotify API is queried to return user data, in the form of the top artists streamed from the spotify platform by the user. Clicking the 'More Info' button, will display the artists analytics, and selecting the 'Go to Player' button, will go to the player page, where music will play, and lyrics will be displayed. </p>
                            <ColoredLine color='black' />
                        </div>
                    </form>

                    : <div style={{ width: "30%" }}>
                        <h2>How does this work?</h2>
                        <p>When authenticated with Spotify, hit the search button! This will bring up a list of the accounts most played artists / tracks, along with links to play music with a built in player which implements to Spotify Api Playback Endpoint </p>
                    </div>

                }

                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Click to Authenticate With Spotify</a>
                    : <Button variant="danger" onClick={logout} style={{ color: 'white' }}>Click to Logout</Button>
                }

                {renderArtists()}

            </header>
        </div>
    );

}


export default Artists