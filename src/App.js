import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import SpotifyLogo from './resources/Spotify.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import ArtistModal from "./components/ArtistModal";
import Navbar from "./components/ColorSchemesExample";
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
            <header className="App-header">
                
                {/*<h1>Find your favourite artists</h1>*/}
                <img src={SpotifyLogo} width="30%"/>

                {token ?    
                    <form onSubmit={searchArtists}>
                        <Button variant="success" type={"submit"}  style={{color:'black'}}>Find Your Most Played Artists</Button>
                        <div style={{
                            width: "60%",
                            margin: "auto"
                        }}>

                            <ColoredLine color='black' />
                            <p>By hitting the button above, The Spotify API is queried to return user data, in the form of the top artists streamed from the spotify platform by the user. Clicking the 'more info' button, will display the artists analytics, and selecting the 'Go to Player' button, will go to the player page, where music will play, lyrics will be displayed, and an audio visualizer is displayed. </p>
                            <ColoredLine color='black' />
                        </div>

                        {/* <button onClick={getCurrentlyPlaying}> Get Current Playing Info</button>  Going to New page*/}

                    </form>
                

                    : <div style = {{width:"30%"}}>
                        <h2>How does this work?</h2>
                        <p>When authenticated with Spotify, hit the search button! This will bring up a list of the accounts most played artists, along with links to play the artists music on Spotify</p>
                        
                    </div>
                    
                }
                
                {!token ?
                    
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Click to Authenticate With Spotify</a>
                    : <Button variant="danger" onClick={logout}  style={{color:'black'}}>Click to Logout</Button>
                      }
               
                {renderArtists()}
                {/* {renderCurrentlyPlaying()} */}
                
               

            </header>
        </div>
        
    );
}

export default App;
