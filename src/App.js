import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';

function App() {
    const CLIENT_ID = "89dba4db4d2642e2ac2e0f4d5dc0d457"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [token, setToken] = useState("")
    const [artists, setArtists] = useState([])
    const [mostPlayed, setMostPlayed] = useState([])
    const dummyToken = "BQDQ3HSFGZBLfNMC56_xwJNn_ioPLcUk_rreWe6Riiod-Nhv7m_j5o84LUg2sa5V_ICAZG4yDnJ94xpVJ83OD2itNAj7MjGQQnrWmjALWy7xrvHnltmN6y4MZWME21PaoaKXMBPBZQwK84KRtKwlNcm-29A5BJBlirP3wmpPMsCXpgTofk6GqlK9"
    
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

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
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
                {artist.name}
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
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

                {token ?
                    <form onSubmit={searchArtists}>
                        <button type={"submit"}>Search</button>

                    </form>

                    : <h2>Please login</h2>
                }

      
                {renderArtists()}

            </header>
        </div>
    );
}

export default App;
