import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import TrackModal from "./TrackModal";
import PlayerModal from "./PlayerModal";
function TrackCard({artist, trackImage, trackName, albumName, albumReleaseDate, trackUri,  token}) {
  
  return (
    <Card style={{ width: '20rem', backgroundColor: 'rgb(30, 215, 96)' }}>
      <Card.Img variant="top" src={trackImage} width={"300px"} height={"350px"}/>
      <Card.Body>
        <Card.Title> {trackName}</Card.Title>
        <Button variant="secondary"  href={trackUri}>See on Spotify </Button>
        <TrackModal artist = {artist} trackName={trackName} albumName = {albumName} albumReleaseDate = {albumReleaseDate}/>
        <PlayerModal artist={artist} trackName={trackName} trackUri={trackUri} token={token}></PlayerModal>
      </Card.Body>
      <ListGroup >
        
      </ListGroup>
      
    </Card>
  );
}

export default TrackCard;