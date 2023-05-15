import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Product from './components/Product';

const App = () => {
  return (
    <Container className='mt-3'>
      <Row>
        <Col>
          <Product />
        </Col>
      </Row>
    </Container>
  )
}

export default App
