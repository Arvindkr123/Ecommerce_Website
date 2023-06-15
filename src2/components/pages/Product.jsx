import { Card, Button } from 'react-bootstrap'
import cartElements from './cartElement'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Store/AuthContext';


const Product = () => {
    const authCtx = useContext(AuthContext);
    const addCartHandler = (item) => {
        authCtx.addToCart(item);
    }
    return (
        <>
            {
                cartElements.map((item) => {
                    return (
                        <div key={item.id} className="col-md-4 mb-4 d-flex justify-content-center">
                            <Card className='shadow border-0' style={{width:'500px'}}>
                                <Card.Title className='text-center p-2'>
                                    <h2>{item.title}</h2>
                                </Card.Title>
                                <div className="card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src={item.imageUrl}
                                        alt="Album 1"
                                        className="card-img-top img-fluid hover-scale"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-around align-content-center">
                                    <Card.Text>
                                        <h2>Price: ${item.price}</h2>
                                    </Card.Text>
                                    <Link className='btn btn-warning' style={{fontSize:'25px'}} to={`/products/${item.id}`}>see details</Link>
                                    <Button variant="primary" onClick={() => addCartHandler(item)}>ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </div >
                    )
                })
            }
        </>
    )
}

export default Product;