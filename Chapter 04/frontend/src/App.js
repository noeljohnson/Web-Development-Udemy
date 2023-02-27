import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const UNSPLASH_CLIENT_ID = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, updWord] = useState('');
  const [images, updImages] = useState([]);
  const [numDelImg, updImgDelCount] = useState(0);

  function updDeletions(){
    updImgDelCount(numDelImg + 1);
  }
  

  return (
    <div className="App">
      <Header title="Image Gallery"/>
      <Search 
        word={word} 
        updWord={updWord}
        searchFunc={(e)=>{
          e.preventDefault();
          let url = `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_CLIENT_ID}`,
            imgTitle = word;
          fetch(url).then(
            (resp) => resp.json()
          ).then(
            (data) => {
            data["title"] = imgTitle; 
            data["isDeleted"] = false;
            updImages([data].concat(images));
            }
          ).catch(
            (err) => {console.log(err);}
          );
          updWord('');
        }}
      />
      {((images.length - numDelImg) > 0) || <Welcome />}
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {
            images.map(function (image, i, arr){
              if (image.isDeleted){
                return null;
              }else{
                return(
                  <Col key={i} className="pb-3">
                    <ImageCard 
                      imgObj={image}
                      updDeletions={updDeletions}
                    />
                  </Col>
                )
              }
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
