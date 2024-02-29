import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';
import './App.css'

const firstName = "";

const App = () => {
  return (
    <div>
      <Card style={{ width: '400px', margin: '20px' }}>
        <Image  style={{ width: '100%'}} imageUrl={product.imageUrl} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price}  />
          <Description description={product.description} />
        </Card.Body>
      </Card>

      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <Image imageUrl="https://img.freepik.com/vecteurs-libre/concept-travail-equipe-reussite-equipe_74855-6673.jpg" />} 
    </div>
  );
}

export default App;
