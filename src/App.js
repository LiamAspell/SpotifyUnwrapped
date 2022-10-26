import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import SpotifyLogo from './resources/Spotify.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import ArtistModal from "./components/ArtistModal";
import Navbar from "./components/ColorSchemesExample";
import { Player } from "./Pages/Player";
import { Home } from "./Pages/Home"

function App() {
    const CLIENT_ID = "89dba4db4d2642e2ac2e0f4d5dc0d457"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "user-top-read"
    const [token, setToken] = useState("")
    const [artists, setArtists] = useState([])
    const dummyToken = "BQAwhmKpwXnHmE8bstQ3iR1uEWwarVLowMxr9TzSC1kaDwv5dQDbbpoNtIkqFL6VioTHSFlhb9DkbiHJgLmcosqM8TUsajY7ofgc7eAKqzszwj71HtcDHQYKp-AWGJ7UmVn2hxhuyHAxRLaLfIv22xDDV5CCw2IVQMJmWAIAXAHCWw0kKFeVOQ"

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
     
    //Going to Player Page 
    // const getCurrentlyPlaying = async (e) => {
    //     e.preventDefault()
    //     const { currentPlayingData } = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
    //         headers: {
    //             Authorization: `Bearer ${dummyToken}`
    //         },
    //         params: {

    //         }

    //     })

    //     console.log("1234")
    //     console.log(currentPlayingData)
    // }


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

    //Going to Player Page 
    // const renderCurrentlyPlaying = () => {
        
    //     return  (
    //         <div>
    //             <p>The song currently playing is : </p>
    //         </div>

            
    //     )
    // }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                <ColoredLine color='black' />
                {artist.name}<br />
                
                <img width={"400px"} src={artist.images[0].url} alt="123" />
                <form action={artist.external_urls.spotify}>
                    <Button variant="secondary" type="submit">Go to Player</Button>
                    <ArtistModal artistName={artist.name} artistFollowers={artist.followers.total} artistPopularity={artist.popularity} artistGenre={artist.genres[0]}/>
                  
                    
                </form>
                
            </div>
        ))
    }
    return (
   
   
        <div className="App">
            <Navbar />
            
        </div>
        
    );
}

export default App;
