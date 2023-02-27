//GTG

import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ImageCard({imgObj, updDeletions}){
  let imgTitle = imgObj.title, 
  imgDesc = imgObj.description || imgObj.alt_description, 
  srcLink = imgObj.urls.small;
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
            updDeletions();
          }}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
//TYJC
