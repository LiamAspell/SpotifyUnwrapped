import React from 'react';
import { useEffect, useState } from "react";
import '../App.css';
import axios from 'axios';
import SpotifyLogo from '../resources/Spotify.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import ArtistModal from "../components/ArtistModal";
import PlayerModal from "../components/PlayerModal";
import { BiHeadphone } from "react-icons/bi";
import KitchenSinkExample from "../components/KitchenSinkExample" 
export const Artists = () => {
    const CLIENT_ID = "89dba4db4d2642e2ac2e0f4d5dc0d457"
    const REDIRECT_URI = "http://localhost:3000/Artists"
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
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=40&offset=5", {       //https://api.spotify.com/v1/search
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
                <img width={"400px"} height={"400px"} src={artist.images[0].url} alt="123" />
                <form action={artist.external_urls.spotify}>
                    <Button variant="secondary" type="submit">See on Spotify</Button>
                    <ArtistModal artistName={artist.name} artistFollowers={artist.followers.total} artistPopularity={artist.popularity} artistGenre={artist.genres[0]} token={token} />
                </form>
                <PlayerModal artistName={artist.name} artistFollowers={artist.followers.total} artistPopularity={artist.popularity} artistGenre={artist.genres[0]} trackUri={artist.uri} token={token}></PlayerModal>
            </div>
        ))
    }

    const render = () => {
        return artists.map(artist => (
            <div key={artist.id} style={{border:"20px solid rgb(30, 215, 96)"}}>
                <KitchenSinkExample artistImage={artist.images[0].url} artistName={artist.name} artistFollowers={artist.followers.total} artistPopularity={artist.popularity} artistGenre={artist.genres[0]} trackUri={artist.uri} token={token} />
                {/* <ColoredLine color='black' />
                {artist.name}<br />
                <img width={"400px"} height={"400px"} src={artist.images[0].url} alt="123" />
                <form action={artist.external_urls.spotify}>
                    <Button variant="secondary" type="submit">See on Spotify</Button>
                    <ArtistModal artistName={artist.name} artistFollowers={artist.followers.total} artistPopularity={artist.popularity} artistGenre={artist.genres[0]} token={token} />
                </form>
                <PlayerModal artistName={artist.name} artistFollowers={artist.followers.total} artistPopularity={artist.popularity} artistGenre={artist.genres[0]} trackUri={artist.uri} token={token}></PlayerModal> */}
            </div>
        ))
    }

    return (
        <div className='App'>
            {/* <Navbar /> */}
            <header className="App-header">
                <h1>Find Your Favourite Artists</h1>
                <img src={SpotifyLogo} width="30%" alt="logo" />
                {token ?
                    <form onSubmit={searchArtists}>
                        <Button variant="success" type={"submit"} style={{ color: 'white' }}>Find Your Most Played Artists</Button>
                        <div style={{
                            width: "60%",
                            margin: "auto"
                        }}>
                            <ColoredLine color='black' />
                            <p>By hitting the button above, The Spotify API is queried to return user data, in the form of the top artists streamed from the spotify platform by the user. Clicking the 'More Info' button, will display the artists analytics, and selecting the 'Go to Player' button, will link you to the player page, where the artists music will play, and lyrics will be displayed. </p>
                            <ColoredLine color='black' />
                        </div>
                    </form>
                    : <div style={{ width: "60%" }}>
                        <h2>How does this work?</h2>
                        <p>When authenticated with Spotify, hit the search button! This will bring up a list of the accounts most played artists / tracks, along with links to play music with a built in player which implements to Spotify Api Playback Endpoint </p>
                        
                    </div>
                    
                }
                {!token ?
                    <Button variant="success" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Click To Login on with Spotify</Button>
                    : <Button variant="danger" onClick={logout} style={{ color: 'white' }}>Click to Logout</Button>
                }
                
                           
                <div style={{
                    display:"flex",
                    flexWrap:"wrap",
                    alignItems:"center",
                    justifyContent:"center",
                    
                }}>
                {/* {renderArtists()} */}
                {render()}
                
                </div>
                
            </header>
            
        </div>
    );

}


export default Artists