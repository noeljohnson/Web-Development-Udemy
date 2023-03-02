//GTG

import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';

function ImageCard({imgObj, updDeletions, saveImgFunc}){
  let imgTitle = imgObj.title, 
  imgDesc = imgObj.description || imgObj.alt_description, 
  srcLink = imgObj.urls.small,
  imgAuthor = imgObj.user?.name || "No Author",
  imgAuthPortfolioUrl = imgObj.user?.portfolio_url;
  console.log(
    `imgTitle:\"${imgTitle}\"`
  );
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={srcLink} />
      <Card.Body>
        <Card.Title>{imgTitle}</Card.Title>
        <Card.Text>
          {imgDesc}
        </Card.Text>
        <Button variant="primary"
          onClick={()=>{
            imgObj.isDeleted = true;
            if (imgObj.isSaved){
              updDeletions(imgObj, 1);
            }else{
              updDeletions(imgObj);
            }
          }}>
          Delete
        </Button>{' '}
        {imgObj.isSaved || 
          <Button variant="secondary"
            onClick={()=>{
              imgObj.isSaved = true;
              saveImgFunc(imgObj);
            }}>
            Save
          </Button>
        }
      </Card.Body>
      <Card.Footer style={{"textAlign": "center"}}>
        {imgAuthPortfolioUrl ?
          <Nav.Link eventKey="1" href={imgAuthPortfolioUrl} style={{"color": "#33ccff"}} target="_blank">
            {imgAuthor}
          </Nav.Link>
            :
          imgAuthor
        }
      </Card.Footer>
    </Card>
  );
}

export default ImageCard;
//TYJC
