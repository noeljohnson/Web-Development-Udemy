import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import Loader from './components/Loader';
import Notification from './components/Notification';
import { useState, useEffect } from "react";
import { Container, Row, Col, ToastContainer } from "react-bootstrap";

function App() {
  const [word, updWord] = useState('');
  const [images, updImages] = useState([]);
  const [numDelImg, updImgDelCount] = useState(0);
  const [numDownload, updNumDownload] = useState(0);
  const [isLoading, updLoading] = useState(true);
  const [notifs, updNotifs] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  function delNotif(){
    let newNotif = notifs.slice(1, notifs.length);
    console.log('new notifnotifs', ...newNotif);
    updNotifs(newNotif);
  }

  function updDeletions(imgObj, type=0){
    const imgId = imgObj.id;
    const notifObj = {
      "type": "warning",
      "message": `Deleted Image ${imgObj.title}`,
      "set": false,
    };

    if (type == 1){
      fetch(`${API_URL}/images/${imgId}`,
        {
          "method": "DELETE"
        }
      ).then(
        (resp) => {return resp.json();}
      ).then(
        (data) => {
          console.log(data);
          updImgDelCount(numDelImg + 1);
          updNotifs(notifs.concat([notifObj])); 
        }
      ).catch(
        (error) => {console.log(error);}
      );
    }else{
      updImgDelCount(numDelImg + 1);
      updNotifs(notifs.concat([notifObj])); 
    }

  }

  function loadAllDB(){
    const notifObj = {
      "type": "success",
      "message": "Images loaded",
      "set": false,
    };

    fetch(`${API_URL}/images`).then(
      (resp) => {return (resp.json());}
    ).then(
      (data) =>{
        data.forEach(
          function(val, ind, arr){
            val["isDeleted"] = false;
          }
        );
        console.log(data);
        updLoading(false);
        updImages(data);
        updNotifs(notifs.concat([notifObj])); 
      }
    ).catch(
      (e) =>{
        console.log(e);
      }
    );
  }

  function saveImageObj(imgObj){
    const notifObj = {
      "type": "success",
      "message": `Saved Image ${imgObj.title}`,
      "set": false,
    };
    fetch(`${API_URL}/images`,
      {
        "method": "POST",
        "headers":{
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(imgObj)
      }
    ).then(
      (resp) => {return resp.json();}
    ).then(
      (data) => {
        console.log(data);
        updNumDownload(numDownload + 1);
        updNotifs(notifs.concat([notifObj])); 
      }
    ).catch(
      (error) => {console.log(error);}
    );
  }
  
  useEffect(loadAllDB, []);

  return (
    <div className="App">
      <Header title="Image Gallery"/>
      {isLoading || <Search 
        word={word} 
        updWord={updWord}
        searchFunc={(e)=>{
          e.preventDefault();

          let url = `${API_URL}/new-image?query=${word}`,
            imgTitle = word;
          
          fetch(url).then(
            (resp) => resp.json()
          ).then(
            (data) => {
            data["title"] = imgTitle; 
            data["isDeleted"] = false;
            data["isSaved"] = false;
            updImages([data].concat(images));
            }
          ).catch(
            (err) => {console.log(err);}
          );
          updWord('');
        }}/>
      }
      {isLoading && <Loader />}
      {isLoading || ((images.length - numDelImg) > 0) || <Welcome />}
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
                      saveImgFunc={saveImageObj}
                    />
                  </Col>
                )
              }
            })
          }
        </Row>
      </Container>
      <ToastContainer position="bottom-end" className="p-3">
        {
          notifs.map(function(notifObj, ind, arr){
            if (!notifObj.set){
              notifObj.set = true;
              setTimeout(delNotif, 1000);
            }
            return(
              <Notification
                key={ind}
                type={notifObj.type}
                message={notifObj.message}
              />
            );
          })
        }
      </ToastContainer>
    </div>
  );
}

export default App;
