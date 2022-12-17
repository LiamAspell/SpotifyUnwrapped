import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ArtistModal from "../components/ArtistModal";
import PlayerModal from "../components/PlayerModal";
function KitchenSinkExample({artistImage, artistName, artistFollowers, artistPopularity, artistGenre, trackUri, token}) {
  console.log(artistImage)
  console.log(artistName)
  return (
    <Card style={{ width: '20rem', backgroundColor: 'rgb(30, 215, 96)' }}>
      <Card.Img variant="top" src={artistImage} width={"300px"} height={"350px"}/>
      <Card.Body>
        <Card.Title>{artistName}</Card.Title>
        <Button variant="secondary" type="submit">See on Spotify</Button>
        <ArtistModal artistName={artistName} artistFollowers={artistFollowers} artistPopularity={artistPopularity} artistGenre={artistGenre} token={token} />
        <PlayerModal artistName={artistName} artistFollowers={artistFollowers} artistPopularity={artistPopularity} artistGenre={artistGenre} trackUri={trackUri} token={token}></PlayerModal>
      </Card.Body>
      <ListGroup >
        
      </ListGroup>
      
    </Card>
  );
}

export default KitchenSinkExample;