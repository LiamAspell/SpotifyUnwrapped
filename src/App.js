import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import SpotifyLogo from './resources/Spotify.jpg'
import Button from 'react-bootstrap/Button';

function App() {
    const CLIENT_ID = "89dba4db4d2642e2ac2e0f4d5dc0d457"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [token, setToken] = useState("")
    const [artists, setArtists] = useState([])
    const [mostPlayed, setMostPlayed] = useState([])
    const dummyToken = "BQAQCIoUeMIFcabdWdp1RIVnJnKGEJO0ofKwS0QsVIXAQhX0fvCIBMfJLr6wA84YMEY9wLTvPfnrezOcJrcoTAi_jBdTHKCOR4kG2dWEIPWTYIrdiRFQi7q8oO5NCrB1gar8KnDevG0kMn2zdhQFb1pkAA6QWrdYt10HK0OqoGMIZlP_nROLwM9B"
    
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
                height: 5
            }}
        />
    );

    const refreshPage = ()=>{
        window.location.reload();
     }

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.location.reload();
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=30&offset=5", {       //https://api.spotify.com/v1/search
            headers: {
                Authorization: `Bearer ${dummyToken}`
            },
            params: {
                // q: "Elvis",
                // type: "artist",
                // limit: 10
            }
        })

        const name = data.items[1].name;

        for(let i = 0; i < 30; i++){
            console.log(data.items[i].name)
    
        }

        console.log(data.items)
        setArtists(data.items)
    }


    //Render Artists From Search Query 
    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                <ColoredLine color="black" />
                {artist.name}<br />
                <img width={"30%"} src={artist.images[0].url}/>
                
                {/* //{artist.href} */}
                
                <form action={artist.external_urls.spotify}>
                    <input type="submit" value="Go to Spotify" />
                </form>

                
    
            </div>
        ))
    }
    return (
        <div className="App">
            <header className="App-header">

                <img src={SpotifyLogo} width="30%"/>
                <h1>Spotify API caller</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Click to Authenticate With Spotify</a>
                    : <button onClick={logout}>Logout</button>
                      }

                {token ?
                    <form onSubmit={searchArtists}>
                        <Button variant="primary" type={"submit"}>Search</Button>
                        
                    </form>

                    : <div style = {{width:"30%"}}>
                        <h2>How does this work?</h2>
                        <p>When authenticated with Spotify, hit the search button! This will bring up a list of the accounts most played artists, along with links to play the artists music on Spotify</p>
                    </div>
                    
                }
               
                {renderArtists()}
               

            </header>
        </div>
    );
}

export default App;
