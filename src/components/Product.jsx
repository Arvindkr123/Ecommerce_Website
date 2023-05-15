import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]
const Product = () => {
    return (
        <Container className='d-flex gap-4'>
            {
                productsArr.map((item, i) => {
                    return <Card style={{ width: '18rem' }} key={i}>
                        <Card.Img variant="top" src={item.imageUrl} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>Price ${item.price}</Card.Text>
                        </Card.Body>
                    </Card>
                })
            }
        </Container>
    )
}

export default Product
