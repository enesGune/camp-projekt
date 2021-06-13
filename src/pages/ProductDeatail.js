import React from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react';

export default function ProductDeatail() {
  let { id } = useParams();
  return <div>  <Card.Group>
    <Card fluid >
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header></Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          {id}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Okundu
          </Button>
          <Button basic color='red'>
            Sil
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group></div>;
}
